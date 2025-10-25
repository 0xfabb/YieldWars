import axios from 'axios';
import { createLogger } from '../utils/logger.js';

const logger = createLogger('PythService');

export interface PythPrice {
  id: string;
  price: {
    price: string;
    conf: string;
    expo: number;
    publish_time: number;
  };
  ema_price: {
    price: string;
    conf: string;
    expo: number;
    publish_time: number;
  };
}

export interface HermesResponse {
  binary: {
    encoding: string;
    data: string[];
  };
  parsed?: PythPrice[];
}

export class PythService {
  private readonly hermesBaseUrl: string;
  private readonly ethUsdPriceFeedId: string;

  constructor() {
    this.hermesBaseUrl = process.env.HERMES_BASE_URL || 'https://hermes.pyth.network';
    this.ethUsdPriceFeedId = process.env.ETH_USD_PRICE_FEED_ID || '0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace';
  }

  /**
   * Fetch price update data from Hermes API
   * This is the critical function for Pyth hackathon qualification
   */
  async fetchPriceUpdateData(priceIds?: string[]): Promise<string[]> {
    try {
      const ids = priceIds || [this.ethUsdPriceFeedId];
      const idsParam = ids.map(id => `ids[]=${id}`).join('&');
      
      const url = `${this.hermesBaseUrl}/v2/updates/price/latest?${idsParam}&encoding=hex`;
      
      logger.debug('Fetching price update data from Hermes', { url, priceIds: ids });

      const response = await axios.get<HermesResponse>(url, {
        timeout: 10000,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'ArenaFi-Orchestrator/1.0'
        }
      });

      if (!response.data.binary?.data) {
        throw new Error('Invalid response format from Hermes API');
      }

      // Convert hex strings to proper 0x format
      const priceUpdateData = response.data.binary.data.map(hexString => {
        const formatted = hexString.startsWith('0x') ? hexString : `0x${hexString}`;
        logger.debug('Formatted price update data', {
          original: hexString.substring(0, 20) + '...',
          formatted: formatted.substring(0, 22) + '...',
          length: formatted.length
        });
        return formatted;
      });

      logger.info('Successfully fetched price update data', {
        count: priceUpdateData.length,
        totalSize: priceUpdateData.reduce((sum, data) => sum + data.length, 0)
      });

      return priceUpdateData;

    } catch (error) {
      logger.error('Failed to fetch price update data from Hermes:', error);
      
      if (axios.isAxiosError(error)) {
        logger.error('Hermes API error details', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data
        });
      }
      
      throw new Error(`Failed to fetch price update data: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Fetch latest price data with parsed values (for display purposes only)
   * Note: This should NOT be used for settlement - only for UI display
   */
  async fetchLatestPrice(priceId?: string): Promise<PythPrice | null> {
    try {
      const id = priceId || this.ethUsdPriceFeedId;
      const url = `${this.hermesBaseUrl}/v2/updates/price/latest?ids[]=${id}&parsed=true`;
      
      logger.debug('Fetching latest price for display', { priceId: id });

      const response = await axios.get<HermesResponse>(url, {
        timeout: 5000,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'ArenaFi-Orchestrator/1.0'
        }
      });

      if (!response.data.parsed || response.data.parsed.length === 0) {
        logger.warn('No parsed price data available');
        return null;
      }

      const priceData = response.data.parsed[0];
      
      logger.debug('Latest price fetched', {
        id: priceData.id,
        price: priceData.price.price,
        expo: priceData.price.expo,
        publishTime: priceData.price.publish_time
      });

      return priceData;

    } catch (error) {
      logger.error('Failed to fetch latest price:', error);
      return null;
    }
  }

  /**
   * Format Pyth price for display
   */
  formatPrice(price: string, expo: number): number {
    const priceNum = parseInt(price);
    return priceNum * Math.pow(10, expo);
  }

  /**
   * Validate price update data format
   */
  validatePriceUpdateData(data: string[]): boolean {
    if (!Array.isArray(data) || data.length === 0) {
      logger.error('Price update data must be a non-empty array');
      return false;
    }

    for (const item of data) {
      if (typeof item !== 'string') {
        logger.error('All price update data items must be strings');
        return false;
      }

      if (!item.startsWith('0x')) {
        logger.error('All price update data items must start with 0x');
        return false;
      }

      if (item.length < 10) {
        logger.error('Price update data items seem too short');
        return false;
      }
    }

    logger.debug('Price update data validation passed', {
      count: data.length,
      totalSize: data.reduce((sum, item) => sum + item.length, 0)
    });

    return true;
  }

  /**
   * Get price feed IDs for different assets
   */
  getPriceFeedIds(): Record<string, string> {
    return {
      'ETH/USD': '0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace',
      'BTC/USD': '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43',
      'SOL/USD': '0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d',
      'MATIC/USD': '0x5de33a9112c2b700b8d30b8a3402c103578ccfa2765696471cc672bd5cf6ac52'
    };
  }

  /**
   * Health check for Hermes API
   */
  async healthCheck(): Promise<boolean> {
    try {
      const response = await axios.get(`${this.hermesBaseUrl}/docs`, {
        timeout: 5000
      });
      
      const isHealthy = response.status === 200;
      logger.info('Hermes API health check', { healthy: isHealthy });
      
      return isHealthy;
    } catch (error) {
      logger.error('Hermes API health check failed:', error);
      return false;
    }
  }
}
