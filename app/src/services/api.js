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
    //throw error;
    return null; // Retourne null en cas d'erreur réseau
  }
};

// /**
//  * Normalise les données utilisateur (gestion de todayScore/score)
//  */
// const normalizeUserData = (user) => ({
//   id: user.id,
//   userInfos: user.userInfos,
//   todayScore: user.todayScore ?? user.score, // Standardisation du score
//   keyData: user.keyData,
// });

// /**
//  * Normalise les données d'activité (ne modifie plus la date)
//  */
// const normalizeUserActivity = (activity) => ({
//   userId: activity.userId,
//   sessions: activity.sessions.map((session) => ({
//     ...session, // ❌ Suppression du formatage des dates
//   })),
// });

// /**
//  * Normalise les sessions moyennes
//  */
// const normalizeUserAverageSessions = (sessions) => ({
//   userId: sessions.userId,
//   sessions: sessions.sessions.map((session) => ({
//     ...session, // Garde les jours sous forme de nombres (1 à 7)
//   })),
// });

// /**
//  * Normalise les performances
//  */
// const normalizeUserPerformance = (performance) => ({
//   userId: performance.userId,
//   kind: performance.kind,
//   data: performance.data,
// });

// Fonctions spécifiques pour récupérer chaque type de donnée avec normalisation
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