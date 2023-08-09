// import LoginPage from "./pages/LoginPage";
// import SginupPage from "./pages/SginupPage";
import { useThemeContext } from "./context/ThemeContext";

import MainLayout from "./components/MainLayout";
// import HazPage from "./pages/HazPage";
import  Router  from "./router";



function App() {

  const {theme } = useThemeContext();


  return (
    <div className={theme}>
      {/* < SginupPage />
      < LoginPage /> */}
      <MainLayout>
        <Router />
      </MainLayout>

      {/* <HazPage /> */}

    </div>
  );
}

export default App;
