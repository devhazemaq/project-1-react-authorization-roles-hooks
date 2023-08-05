// import LoginPage from "./pages/LoginPage";
// import SginupPage from "./pages/SginupPage";

import MainLayout from "./components/MainLayout";
import  Router  from "./router";


function App() {
  return (
    <div className="App">
      {/* < SginupPage />
      < LoginPage /> */}
      <MainLayout>
        <Router />
      </MainLayout>

    </div>
  );
}

export default App;
