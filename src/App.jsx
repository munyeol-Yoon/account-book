import { RouterProvider } from "react-router-dom";
import {
  AccountBookProvider,
  MonthProvider,
} from "./context/AccountBookContext";
import DetailPage from "./pages/DetailPage/DetailPage";
import HomePage from "./pages/HomePage/HomePage";
import router from "./routes/router";

function App() {
  return (
    <AccountBookProvider>
      <MonthProvider>
        <RouterProvider router={router}>
          <HomePage />
          <DetailPage />
        </RouterProvider>
      </MonthProvider>
    </AccountBookProvider>
  );
}

export default App;
