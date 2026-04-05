function SummaryCard({ title, amount }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{amount}</p>
    </div>
  );
}

export default SummaryCard;