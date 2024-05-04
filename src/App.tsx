import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login/Login';
import AuthProvider from './provider/AuthProvider';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import PrivateRoute from './routes/PrivateRoutes';
import Glassware from './pages/Glassware/Glassware';
import Home from './pages/Home/Home';
import Vase from './pages/Vase/Vase';
import VaseDetail from './pages/Vase/VaseDetail';
import Cart from './layouts/Cart/Cart';
import Pay from './pages/Pay/Pay';
import Ornament from './pages/Ornament/Ornament';
import OrnamentDetail from './pages/Ornament/OrnamentDetail';
import Teaset from './pages/Teaset/Teaset';
import TeasetDetail from './pages/Teaset/TeasetDetail';
import Kitchenware from './pages/Kitchenware/Kitchenware';
import KitchenwareDetail from './pages/Kitchenware/KitchenwareDetail';
import GlasswareDetail from './pages/Glassware/GlasswareDetail';
import DesignTrend from './pages/DesignTrend/DesignTrend';
function App() {
    return (
        <>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/resetpassword"
                            element={<ResetPassword />}
                        />
                        <Route path="/" element={<PrivateRoute />}>
                            <Route path="" element={<Home />} />

                            <Route path="/vase" element={<Vase />} />
                            <Route path="/vase/:id" element={<VaseDetail />} />
                            <Route path="/teaset" element={<Teaset />} />
                            <Route
                                path="/teaset/:id"
                                element={<TeasetDetail />}
                            />
                            <Route path="/ornament" element={<Ornament />} />
                            <Route
                                path="/ornament/:id"
                                element={<OrnamentDetail />}
                            />

                            <Route
                                path="/kitchenware"
                                element={<Kitchenware />}
                            />
                            <Route
                                path="/kitchenware/:id"
                                element={<KitchenwareDetail />}
                            />
                            <Route path="/altar" element={<Glassware />} />
                            <Route path="/glassware" element={<Glassware />} />
                            <Route
                                path="/glassware/:id"
                                element={<GlasswareDetail />}
                            />
                            <Route
                                path="/designtrend"
                                element={<DesignTrend />}
                            />
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
