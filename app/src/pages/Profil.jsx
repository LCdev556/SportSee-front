



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { fetchUserData, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from "../data/apiMock";
import HelloBanner from "../components/HelloBanner";
import KeyDataSection from "../components/KeyDataSection";
import ActivityChart from "../components/ActivityChart";
import PerformanceChart from "../components/PerformanceChart";
import AverageSessionsChart from "../components/AverageSessionsChart";
import ScoreChart from "../components/ScoreChart";
import { fetchUserMainData, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from "../services/api";
import "../style/Profil.scss";

function Profil() {
  const { id } = useParams();
  const userId = Number(id);

  const [userMainData, setUserMainData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userSessions, setUserSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
 

  const [errorActivity, setErrorActivity] = useState(false);
  const [errorSessions, setErrorSessions] = useState(false);
  const [errorPerformance, setErrorPerformance] = useState(false);
  const [errorScore, setErrorScore] = useState(false);
  const [error, setError] = useState(null);
  
  const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   setLoading(true);
  //   Promise.all([
  //     fetchUserMainData(userId),
  //     fetchUserActivity(userId),
  //     fetchUserAverageSessions(userId),
  //     fetchUserPerformance(userId),
  //   ])
  //     .then(([data, activity, sessions, performance]) => {
  //       setUserMainData(data);
  //       setUserActivity(activity.sessions);
  //       setUserSessions(sessions.sessions);
  //       setUserPerformance(performance);
  //     })
  //     .catch((err) => setError(err.message))
  //     .finally(() => setLoading(false));
  // }, [userId]);

  useEffect(() => {
    setLoading(true);
  
    Promise.all([
      fetchUserMainData(userId).then(setUserMainData).catch(() => setErrorScore(true)),
      fetchUserActivity(userId).then(data => setUserActivity(data.sessions)).catch(() => setErrorActivity(true)),
      fetchUserAverageSessions(userId).then(data => setUserSessions(data.sessions)).catch(() => setErrorSessions(true)),
      fetchUserPerformance(userId).then(setUserPerformance).catch(() => setErrorPerformance(true)),
    ])
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
  }, [userId]);

  if (error) return <p>Erreur : {error}</p>;
  if (loading) return <p>Chargement...</p>;
  

  return (
    <div className="profil-page">
      
      <div className="profil-container">
        <HelloBanner name={userMainData.userInfos.firstName} />
        <section className="charts-container">
          <div className="main-charts">
            <ActivityChart activityData={userActivity} error={errorActivity} />
            <div className="sub-charts">
              <AverageSessionsChart sessions={userSessions} error={errorSessions}/>
              <PerformanceChart performance={userPerformance} error={errorPerformance} />
              <ScoreChart score={userMainData.todayScore} error={errorScore}/>
            </div>
          </div>
          <KeyDataSection keyData={userMainData.keyData} />
        </section>
      </div>
    </div>
    
  );
}

export default Profil;