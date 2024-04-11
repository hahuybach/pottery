import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/Login/Login";
import AuthProvider from "./provider/AuthProvider";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import PrivateRoute from "./routes/PrivateRoutes";
import Glassware from "./pages/Glassware/Glassware";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="" element={<Home />} />
              <Route path="/glassware" element={<Glassware />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
