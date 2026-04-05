function Insights({ transactions }) {
  const categoryTotals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const highestCategory = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b,
    ""
  );

  return (
    <div className="insights">
      <h3>Insights</h3>
      <p>Highest Spending: {highestCategory || "N/A"}</p>
    </div>
  );
}

export default Insights;