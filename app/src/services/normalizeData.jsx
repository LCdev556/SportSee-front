export const normalizeUserMainData = (user) => ({
    id: user.id,
    userInfos: user.userInfos,
    todayScore: user.todayScore ?? user.score, 
    keyData: user.keyData,
  });
  
 
export const normalizeUserActivity = (activity) => ({
    userId: activity.userId,
    sessions: activity.sessions.map((session) => ({
      ...session, 
    })),
  });
  
export  const normalizeUserAverageSessions = (sessions) => ({
    userId: sessions.userId,
    sessions: sessions.sessions.map((session) => ({
      ...session, 
    })),
  });
  
export  const normalizeUserPerformance = (performance) => ({
    userId: performance.userId,
    kind: performance.kind,
    data: performance.data,
  });