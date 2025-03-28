import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./mockData_tmp";


const normalizeUserMainData = (user) => {
  return {
    id: user.id,
    userInfos: user.userInfos,
    todayScore: user.todayScore ?? user.score, 
    keyData: user.keyData,
  };
};


const findUser = (userId, dataset) => {
  const id = Number(userId);
  console.log(`🔍 Recherche de l'utilisateur avec l'ID :`, id);
  const user = dataset.find((user) => user.id === id || user.userId === id);
  console.log(`✅ Utilisateur trouvé :`, user);
  return user;
};


export const fetchUserMainData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = findUser(userId, USER_MAIN_DATA);
      user ? resolve(normalizeUserMainData(user)) : reject(new Error("Utilisateur non trouvé"));
    }, 500);
  });
};

export const fetchUserActivity = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetchUserActivity - userId reçu :", userId);

      const activity = findUser(userId, USER_ACTIVITY);
      console.log("fetchUserActivity - Activité trouvée :", activity);
      activity ? resolve(activity) : reject(new Error("activity non trouvées"));
    }, 500);
  });
};

export const fetchUserAverageSessions = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sessions = findUser(userId, USER_AVERAGE_SESSIONS);
      sessions ? resolve(sessions) : reject(new Error("Sessions non trouvées"));
    }, 500);
  });
};

export const fetchUserPerformance = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const performance = findUser(userId, USER_PERFORMANCE);
      if (performance) {
        const standardizedPerformance = {
          ...performance,
          kind: Object.entries(performance.kind).reduce((acc, [key, value]) => {
            acc[parseInt(key)] = value.charAt(0).toUpperCase() + value.slice(1); // Capitaliser
            return acc;
          }, {})
        };
        resolve(standardizedPerformance);
      } else {
        reject(new Error("Performance non trouvée"));
      }
    }, 500);
  });
};