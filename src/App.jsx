import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SummaryCard from "./components/SummaryCard";
import LineChartComponent from "./components/LineChartComponent";
import PieChartComponent from "./components/PieChartComponent";
import Insights from "./components/Insights";
import TransactionTable from "./components/TransactionTable";

import transactionsData from "./data/transactions";

import {
  calculateSummary,
  getCategoryData,
  getMonthlyData,
} from "./utils/calculations";

import "./styles.css";

function App() {
  const [transactions, setTransactions] = useState(transactionsData);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("viewer");

  const [formData, setFormData] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

 
  const handleAdd = () => {
    if (!formData.date || !formData.amount || !formData.category) return;

    const newTransaction = {
      id: Date.now(),
      ...formData,
      amount: Number(formData.amount),
    };

    setTransactions([...transactions, newTransaction]);

    
    setFormData({
      date: "",
      amount: "",
      category: "",
      type: "expense",
    });
  };

  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      setTransactions(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const summary = calculateSummary(transactions);
  const categoryData = getCategoryData(transactions);
  const monthlyData = getMonthlyData(transactions);

  return (
    <div>
      <Navbar role={role} setRole={setRole} />

      <div className="container">

        <div className="cards">
          <SummaryCard title="Balance" amount={summary.balance} />
          <SummaryCard title="Income" amount={summary.income} />
          <SummaryCard title="Expenses" amount={summary.expenses} />
        </div>

        <div className="charts">
          <LineChartComponent data={monthlyData} />
          <PieChartComponent data={categoryData} />
        </div>

        <Insights transactions={transactions} />

        <TransactionTable
          transactions={transactions}
          setTransactions={setTransactions}
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
          role={role}
          formData={formData}
          setFormData={setFormData}
          handleAdd={handleAdd}
        />

      </div>
    </div>
  );
}

export default App;