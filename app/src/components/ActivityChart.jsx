import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "../style/ActivityChart.scss";



function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length > 0) {
    const kilogramData = payload.find((entry) => entry.dataKey === "kilogram");
    const caloriesData = payload.find((entry) => entry.dataKey === "calories");
    return (
      <div className="custom-tooltip">
        {kilogramData && <p>{`${kilogramData.value}kg`}</p>}
        {caloriesData && <p>{`${caloriesData.value}kCal`}</p>}
      </div>
    );
  }
  return null;
}

function CustomLegend() {
  return (
    <div className="custom-legend">
      <span className="legend-item">
        <span className="legend-color black"></span> Poids (kg)
      </span>
      <span className="legend-item">
        <span className="legend-color red"></span> Calories brûlées (kCal)
      </span>
    </div>
  );
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

function ActivityChart({ activityData, error }) {
  if (error) return <p className="error-message">❌ Impossible de charger les données.</p>;
  if (!activityData) return <p>Chargement...</p>;

  
  const formattedData = activityData.map((session, index) => ({
    ...session,
    day: index + 1, 
  }));

 
  const minValue = Math.min(...activityData.map((d) => d.kilogram));
const maxValue = Math.max(...activityData.map((d) => d.kilogram));
const avgValue = Math.round(activityData.reduce((sum, d) => sum + d.kilogram, 0) / activityData.length);

const lowerBound = minValue - 2; 
const upperBound = maxValue + 2; 

  return (
    <div className="activity-chart">
      <h3>Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formattedData} barGap={8} barCategoryGap={25}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
          <XAxis dataKey="day" tick={{ fill: "gray" }} tickLine={false} />
          {<YAxis 
            yAxisId="right" 
            orientation="right" 
            dataKey="kilogram" 
            domain={[lowerBound, upperBound]} 
            ticks={[lowerBound, avgValue, upperBound]} 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "gray" }}
          />}
          <YAxis yAxisId="left" orientation="left" dataKey="calories" hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} verticalAlign="top" align="right" wrapperStyle={{ marginBottom: 20 }} />
          <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} barSize={7} />
          <Bar yAxisId="left" dataKey="calories" fill="#FF0101" radius={[3, 3, 0, 0]} barSize={7} />
          <CartesianGrid strokeDasharray="3 3" stroke="#C0C0C0" horizontal={true} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

ActivityChart.propTypes = {
  activityData: PropTypes.array,
};

export default ActivityChart;

