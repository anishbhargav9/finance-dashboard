import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

function LineChartComponent({ data }) {
  return (
    <div className="chart-box">
      <h3>Monthly Trend</h3>
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="income" stroke="#4CAF50" />
      <Line type="monotone" dataKey="expense" stroke="#F44336" />
    </LineChart>
    </div>
  );
}
 

export default LineChartComponent;