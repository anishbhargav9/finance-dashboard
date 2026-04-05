export const calculateSummary = (transactions) => {
  let income = 0;
  let expenses = 0;

  transactions.forEach((t) => {
    if (t.type === "income") income += t.amount;
    else expenses += t.amount;
  });

  return {
    income,
    expenses,
    balance: income - expenses,
  };
};

export const getCategoryData = (transactions) => {
  const data = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      data[t.category] = (data[t.category] || 0) + t.amount;
    }
  });

  return Object.keys(data).map((key) => ({
    name: key,
    value: data[key],
  }));
};

export const getMonthlyData = (transactions) => {
  const data = {};

  transactions.forEach((t) => {
    const month = new Date(t.date).toLocaleString("default", {
      month: "short",
    });

    if (!data[month]) {
      data[month] = { month, income: 0, expense: 0 };
    }

    if (t.type === "income") data[month].income += t.amount;
    else data[month].expense += t.amount;
  });

  // Replaced Object.values(data) with for...in loop
  const result = [];
  for (let key in data) {
    result.push(data[key]);
  }
  return result;
};