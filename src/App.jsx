import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:accountId" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
