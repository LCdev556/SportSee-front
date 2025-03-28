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

function AverageSessionsChart({ sessions, error }) {
  if (error) return <p className="error-message">❌ Impossible de charger les données.</p>;
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

AverageSessionsChart.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AverageSessionsChart;