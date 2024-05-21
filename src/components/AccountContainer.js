import React, {useState,useEffect}from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);

    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    });



  const Transactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  };
  return (
    <div>
      <Search />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionsList  transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
