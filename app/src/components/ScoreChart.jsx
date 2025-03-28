import PropTypes from "prop-types";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import "../style/ScoreChart.scss"; 

function ScoreChart({ score, error }) {
  if (error) return <p className="error-message">❌ Impossible de charger les données.</p>;
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
};

export default ScoreChart;
