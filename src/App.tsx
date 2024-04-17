import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/Login/Login";
import AuthProvider from "./provider/AuthProvider";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import PrivateRoute from "./routes/PrivateRoutes";
import Glassware from "./pages/Glassware/Glassware";
import Home from "./pages/Home/Home";
import Vase from "./pages/Vase/Vase";
import VaseDetail from "./pages/Vase/VaseDetail";
import Cart from "./layouts/Cart/Cart";
import Pay from "./pages/Pay/Pay";
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
              <Route path="/vase" element={<Vase />} />
              <Route path="/vase/:id" element={<VaseDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pay" element={<Pay />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
