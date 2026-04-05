import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#4CAF50", "#F44336", "#FFC107", "#2196F3"];

function PieChartComponent({ data }) {
  return (
     <div className="chart-box">
      <h3>Spending Breakdown</h3>
    <PieChart width={400} height={300}>
      <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    </div>
  );
}

export default PieChartComponent;