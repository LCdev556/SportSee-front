/**
 * Normalise les données utilisateur (gestion de todayScore/score)
 */
export const normalizeUserMainData = (user) => ({
    id: user.id,
    userInfos: user.userInfos,
    todayScore: user.todayScore ?? user.score, // Standardisation du score
    keyData: user.keyData,
  });
  
  /**
   * Normalise les données d'activité (ne modifie plus la date)
   */
export const normalizeUserActivity = (activity) => ({
    userId: activity.userId,
    sessions: activity.sessions.map((session) => ({
      ...session, // ❌ Suppression du formatage des dates
    })),
  });
  
  /**
   * Normalise les sessions moyennes
   */
export  const normalizeUserAverageSessions = (sessions) => ({
    userId: sessions.userId,
    sessions: sessions.sessions.map((session) => ({
      ...session, // Garde les jours sous forme de nombres (1 à 7)
    })),
  });
  
  /**
   * Normalise les performances
   */
export  const normalizeUserPerformance = (performance) => ({
    userId: performance.userId,
    kind: performance.kind,
    data: performance.data,
  });