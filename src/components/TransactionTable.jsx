function TransactionTable({
  transactions,
  setTransactions,
  filter,
  setFilter,
  search,
  setSearch,
  role,
  formData,
  setFormData,
  handleAdd,
}) {

  const filtered = transactions
    .filter((t) => filter === "all" || t.type === filter)
    .filter((t =>
      t.category.toLowerCase().includes(search.toLowerCase())
    ));


  const handleEdit = (id) => {
    const updated = transactions.map((t) => {
      if (t.id === id) {
        return { ...t, amount: t.amount + 500 };
      }
      return t;
    });

    setTransactions(updated);
  };

  return (
    <div className="table-container">

      <div className="controls">

        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

     
      {role === "admin" && (
        <div className="controls">

          <input
            type="date"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Amount"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          />

          <select
            value={formData.type}
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value })
            }
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <button className="btn btn-add" onClick={handleAdd}>
            Add
          </button>

        </div>
      )}

      
      {filtered.length === 0 ? (
        <p style={{ textAlign: "center" }}>No transactions found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
              {role === "admin" && <th>Action</th>}
            </tr>
          </thead>

          <tbody>
            {filtered.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>

                <td style={{ color: t.type === "income" ? "green" : "red" }}>
                  ₹{t.amount}
                </td>

                <td>{t.category}</td>
                <td>{t.type}</td>

                {role === "admin" && (
                  <td>
                    <button
                      className="btn btn-edit"
                      onClick={() => handleEdit(t.id)}
                    >
                      Edit
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TransactionTable;