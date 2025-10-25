import { ethers } from "ethers";
import ArenaVaultV2Abi from "@/lib/abis/arenaV2abi.json";

// Updated to ArenaVaultV2 contract address
const contractAddress = process.env.NEXT_PUBLIC_ARENAFI_CONTRACT || "0xfE3A48A1A8c7a4E51F7027C6563C7E4BE726923B";

export const getArenaVaultContract = (signerOrProvider: ethers.Provider | ethers.Signer) => {
  return new ethers.Contract(contractAddress, ArenaVaultV2Abi, signerOrProvider);
};

// API endpoints for server communication
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export const arenaAPI = {
  // Battle endpoints
  createBattle: async (battleData: {
    userAddress: string;
    stakeWei: string;
    predictionValue: string;
    durationSec: number;
  }) => {
    const response = await fetch(`${API_BASE_URL}/battles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(battleData)
    });
    return response.json();
  },

  getBattles: async () => {
    console.log("Fetching battles from:", `${API_BASE_URL}/battles`);
    try {
      const response = await fetch(`${API_BASE_URL}/battles`);
      console.log("Battles response status:", response.status);
      const data = await response.json();
      console.log("Battles response data:", JSON.stringify(data, null, 2));
      return data;
    } catch (error) {
      console.error("Error fetching battles:", error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  },

  getBattle: async (battleId: string) => {
    const response = await fetch(`${API_BASE_URL}/battles/${battleId}`);
    return response.json();
  },

  // Lucky game endpoints
  createLuckyGame: async (gameData: {
    userAddress: string;
    entryFee: string;
    gameType: string;
    guess: number;
  }) => {
    const response = await fetch(`${API_BASE_URL}/luckygames`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gameData)
    });
    return response.json();
  },

  createQuickLuckyGame: async (gameData: {
    userAddress: string;
    entryFee: string;
    gameType: string;
    guess: number;
  }) => {
    const response = await fetch(`${API_BASE_URL}/luckygames/quick`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gameData)
    });
    return response.json();
  },

  getLuckyGames: async () => {
    const response = await fetch(`${API_BASE_URL}/luckygames`);
    return response.json();
  },

  getLuckyGameTypes: async () => {
    const response = await fetch(`${API_BASE_URL}/luckygames/types`);
    return response.json();
  },

  // Health check
  getHealth: async () => {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.json();
  }
};
