import {normalizeUserMainData, normalizeUserActivity, normalizeUserAverageSessions, normalizeUserPerformance  } from "./normalizeData"

const BASE_URL = "http://localhost:3000";

/**
 * Effectue une requête GET à l'API
 * @param {string} endpoint - L'URL de l'endpoint après /user/
 * @returns {Promise<object>} Les données de l'API
 */
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des données :", error);
    
    return null; 
  }
};


export const fetchUserMainData = async (userId) => {
  const data = await fetchData(`/user/${userId}`);
  return normalizeUserMainData(data);
};

export const fetchUserActivity = async (userId) => {
  const data = await fetchData(`/user/${userId}/activity`);
  return normalizeUserActivity(data);
};

export const fetchUserAverageSessions = async (userId) => {
  const data = await fetchData(`/user/${userId}/average-sessions`);
  return normalizeUserAverageSessions(data);
};

export const fetchUserPerformance = async (userId) => {
  const data = await fetchData(`/user/${userId}/performance`);
  return normalizeUserPerformance(data);
};