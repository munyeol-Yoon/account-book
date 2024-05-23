import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [accountBook, setAccountBook] = useState(() => {
    const localData = localStorage.getItem("accountBook");
    return localData ? JSON.parse(localData) : [];
  });
  const [selectedMonth, setSelectedMonth] = useState(null);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            accountBook={accountBook}
            setAccountBook={setAccountBook}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
          />
        }
      />
      <Route
        path="/:accountId"
        element={
          <DetailPage
            accountBook={accountBook}
            setAccountBook={setAccountBook}
          />
        }
      />
    </Routes>
  );
}

export default App;
