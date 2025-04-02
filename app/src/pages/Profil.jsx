



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

  
  const [errorMainData, setErrorMainData] = useState(false);
  const [errorActivity, setErrorActivity] = useState(false);
  const [errorSessions, setErrorSessions] = useState(false);
  const [errorPerformance, setErrorPerformance] = useState(false);
  const [errorScore, setErrorScore] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    
    fetchUserMainData(userId)
      .then((data) => {
        if (!data || !data.userInfos) {
          throw new Error("Profil non trouvé");
        }
        setUserMainData(data);

        
        if (data.todayScore === undefined) {
          setErrorScore(true);
        }
      })
      .catch(() => setErrorMainData(true))
      .finally(() => setLoading(false));

    
    fetchUserActivity(userId)
      .then((data) => setUserActivity(data.sessions))
      .catch(() => setErrorActivity(true));

    fetchUserAverageSessions(userId)
      .then((data) => setUserSessions(data.sessions))
      .catch(() => setErrorSessions(true));

    fetchUserPerformance(userId)
      .then(setUserPerformance)
      .catch(() => setErrorPerformance(true));
  }, [userId]);

 
  if (loading) return <p>Chargement...</p>;
  if (errorMainData) return <p style={{ color: "red", fontSize: "20px", textAlign: "center" }}>❌ Erreur 404 : Profil non trouvé</p>;

  return (
    <div className="profil-page">
      <div className="profil-container">
        <HelloBanner name={userMainData.userInfos.firstName} />
        <section className="charts-container">
          <div className="main-charts">
            {errorActivity ? (
              <p className="chart-error">⚠ Impossible de charger les données d'activité.</p>
            ) : (
              <ActivityChart activityData={userActivity} />
            )}

            <div className="sub-charts">
              {errorSessions ? (
                <p className="chart-error">⚠ Impossible de charger les données de sessions.</p>
              ) : (
                <AverageSessionsChart sessions={userSessions} />
              )}

              {errorPerformance ? (
                <p className="chart-error">⚠ Impossible de charger les performances.</p>
              ) : (
                <PerformanceChart performance={userPerformance} />
              )}

              {errorScore ? (
                <p className="chart-error">⚠ Impossible de charger le score.</p>
              ) : (
                <ScoreChart score={userMainData.todayScore} />
              )}
            </div>
          </div>

          <KeyDataSection keyData={userMainData.keyData} />
        </section>
      </div>
    </div>
  );
}

export default Profil;