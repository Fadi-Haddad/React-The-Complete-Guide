import ExpenseItem from "./components/Expenseitem";
// when importing components, we don't include the extension (.js)
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem> 
       {/* components should start with a capital letter */}
    </div>
  );
}

export default App;
