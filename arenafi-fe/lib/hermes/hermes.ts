// Pyth Network configuration for price feeds
export const PYTH_ENDPOINTS = [
  "https://hermes.pyth.network",
  "https://hermes-beta.pyth.network"
];

// ETH/USD price feed ID on Pyth Network
export const ETH_USD_PRICE_FEED_ID = "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace";

// export const ETH_USD_PRICE_FEED_ID = "2hfd3eejE46UYaEaFDdibsAfvN2WbXoc1K1nTJHtn9pS";
// Price feed interface
export interface PythPrice {
  price: string;
  conf: string;
  expo: number;
  publishTime: number;
}

// Fetch latest price from Pyth Hermes API
export async function fetchLatestPrice(priceFeedId: string = ETH_USD_PRICE_FEED_ID): Promise<PythPrice | null> {
  try {
    const response = await fetch(`${PYTH_ENDPOINTS[0]}/api/latest_price_feeds?ids[]=${priceFeedId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data || data.length === 0) {
      throw new Error("No price feed data received");
    }

    const priceFeed = data[0];
    const price = priceFeed.price;
    
    return {
      price: price.price,
      conf: price.conf,
      expo: price.expo,
      publishTime: price.publish_time
    };
  } catch (error) {
    console.error("Error fetching price from Pyth:", error);
    return null;
  }
}

// Get price update data for on-chain updates
export async function getPriceUpdateData(priceFeedIds: string[]): Promise<string[]> {
  try {
    const idsParam = priceFeedIds.map(id => `ids[]=${id}`).join('&');
    const response = await fetch(`${PYTH_ENDPOINTS[0]}/api/latest_vaas?${idsParam}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error getting price update data:", error);
    return [];
  }
}

// Format price for display (considering expo)
export function formatPythPrice(price: string, expo: number): number {
  const priceNumber = parseInt(price);
  return priceNumber * Math.pow(10, expo);
}

// Subscribe to price updates (polling-based)
export function subscribeToPriceUpdates(
  priceFeedIds: string[],
  callback: (prices: PythPrice[]) => void
): () => void {
  try {
    const interval = setInterval(async () => {
      const prices: PythPrice[] = [];
      for (const feedId of priceFeedIds) {
        const price = await fetchLatestPrice(feedId);
        if (price) {
          prices.push(price);
        }
      }
      if (prices.length > 0) {
        callback(prices);
      }
    }, 1500); // Update every second

    return () => clearInterval(interval);
  } catch (error) {
    console.error("Error subscribing to price updates:", error);
    return () => {};
  }
}