import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import "../style/PerformanceChart.scss"; 

/**
 * Composant pour afficher un graphique radar représentant les performances d'un utilisateur dans divers domaines.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Object} props.performance - Les données de performance à afficher dans le graphique.
 * @param {Object} props.performance.kind - Un objet mappant les indices aux noms des différentes catégories de performance.
 * @param {Array} props.performance.data - Un tableau contenant les données des performances (avec `kind` et `value`).
 * @param {boolean} props.error - Indicateur d'erreur pour afficher un message d'erreur.
 * @returns {JSX.Element} - Un graphique radar avec les performances de l'utilisateur.
 */
function PerformanceChart({ performance}) {
  
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
  error: PropTypes.bool,
};

export default PerformanceChart;
