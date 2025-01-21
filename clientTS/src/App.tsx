import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import LandingPage from "./pages/LandingPage";
import PreLaunch from "./pages/PreLaunchLandingPage";
import PageNotFound from "./pages/errors/PageNotFound";
import LoginPage from "./pages/Authentication/LoginPage";

function App() {
  const launched = import.meta.env.VITE_APP_LAUNCHED === "true";
  const isAuth = true;

  return (
    <AppProvider>
      <Routes>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        {!launched ? (
          <Route path="/" element={<PreLaunch />} />
        ) : (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
          </>
        )}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
