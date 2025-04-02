import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import "../style/AverageSessionsChart.scss"; 

const daysMapping = ["L", "M", "M", "J", "V", "S", "D"];

/**
 * Composant personnalisé pour afficher des informations dans le tooltip.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {boolean} props.active - Indique si le tooltip est actif ou non.
 * @param {Array} props.payload - Les données à afficher dans le tooltip.
 * @returns {JSX.Element|null} - Retourne un JSX contenant les informations à afficher dans le tooltip ou `null` si aucune donnée à afficher.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Composant personnalisé pour afficher un curseur (rectangle) dans le graphique.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.points - Les points à utiliser pour positionner le rectangle.
 * @returns {JSX.Element} - Un élément JSX représentant le curseur (rectangle) sur le graphique.
 */
const CustomCursor = ({ points }) => {
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.2)"
      x={points[1].x}
      width={500}
      height={300}
    />
  );
};

/**
 * Composant affichant un graphique en ligne représentant la durée moyenne des sessions.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.sessions - Les données des sessions à afficher dans le graphique.
 * @param {boolean} props.error - Indique si une erreur est survenue lors du chargement des données.
 * @returns {JSX.Element} - Un élément JSX contenant le graphique ou un message d'erreur si les données sont introuvables.
 */
function AverageSessionsChart({ sessions}) {
  
  return (
    <div className="average-sessions-chart">
      <h3 className="chart-title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={sessions} margin={{ top: 50, right: 10, left: 10, bottom: 10 }}>
          <XAxis
            dataKey="day"
            tickFormatter={(day) => daysMapping[day - 1]}
            tick={{ fill: "white", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5, fill: "white", stroke: "rgba(255, 255, 255, 0.5)", strokeWidth: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Définition des types des propriétés du composant `AverageSessionsChart`
AverageSessionsChart.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
  error: PropTypes.bool,
};

export default AverageSessionsChart;