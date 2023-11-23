import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ChartPage from "./pages/ChartPage";
import { CityProvider } from "./contexts/CityContext";

function App() {
  return (
    <CityProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/chart" element={<ChartPage />} />
        </Routes>
      </BrowserRouter>
    </CityProvider>
  );
}

export default App;
