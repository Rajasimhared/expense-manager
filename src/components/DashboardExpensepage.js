import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters.js";

const DashboardExpensePage = () => (
  <div>
    Expense manager
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default DashboardExpensePage;
