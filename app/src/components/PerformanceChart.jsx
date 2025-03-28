import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import "../style/PerformanceChart.scss"; // 🔥 Ajout du CSS

function PerformanceChart({ performance, error }) {
  if (error) return <p className="error-message">❌ Impossible de charger les données.</p>;
  if (!performance) return <p>Aucune donnée disponible</p>;

  const formattedData = performance.data.map((item) => ({
    kind: performance.kind[item.kind], 
    value: item.value,
  }));

  return (
    <div className="performance-chart">
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={formattedData}>
          <PolarGrid stroke="white" />
          <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 12 }} />
          <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

PerformanceChart.propTypes = {
  performance: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        kind: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
    kind: PropTypes.object.isRequired, 
  }),
};

export default PerformanceChart;
