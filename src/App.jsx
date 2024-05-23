import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [accountBook, setAccountBook] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage accountBook={accountBook} setAccountBook={setAccountBook} />
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
