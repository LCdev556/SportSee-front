import PropTypes from "prop-types";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import "../style/ScoreChart.scss"; 

/**
 * Composant pour afficher un graphique radial représentant le score d'un utilisateur.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {number} props.score - Le score de l'utilisateur, un nombre entre 0 et 1 représentant le pourcentage du score.
 * @param {boolean} props.error - Indicateur d'erreur pour afficher un message d'erreur.
 * @returns {JSX.Element} - Un graphique radial avec le score de l'utilisateur et un texte indiquant le pourcentage de l'objectif atteint.
 */
function ScoreChart({ score}) {
  
  const data = [{ name: "Score", value: score * 100, fill: "#FF0000" }];

  return (
    <div className="score-chart">
      <h3 className="score-title">Score</h3>
      <ResponsiveContainer width={200} height={200}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="90%"
          barSize={10}
          startAngle={90}
          endAngle={90 + (score * 360)}
          data={data}
        >
          <RadialBar dataKey="value" cornerRadius={10} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-text">
        <span className="score-percentage">{score * 100}%</span>
        <span className="score-subtext">de votre objectif</span>
      </div>
    </div>
  );
}


ScoreChart.propTypes = {
  score: PropTypes.number.isRequired,  
  error: PropTypes.bool,  
};

export default ScoreChart;
