import React, { useState } from "react";

function AddTransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      ...formData,
      amount: parseFloat(formData.amount),
    };
    onAddTransaction(newTransaction);
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </div>
      <button className="ui button" type="submit">
        Add Transaction
      </button>
    </form>
  );
}

export default AddTransactionForm;
