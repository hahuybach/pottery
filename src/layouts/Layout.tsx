import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import layoutStyle from "./layout.module.css";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <div className={layoutStyle.layout}>
        <div className={layoutStyle.header}>
          <Header />
        </div>
        <div className="margin">
          <Outlet />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
