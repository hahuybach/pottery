import loginStyle from "./login.module.css";
import fbLogo from "./../../assets/logo/fb_logo.jpg";
import ggLogo from "./../../assets/logo/gg_logo.jpg";
import { useState } from "react";
import { useAuth } from "../../provider/AuthProvider";
export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const auth = useAuth();
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.email !== "" && input.password !== "") {
      auth.loginAction(input);
      return;
    }
    alert("pleae provide a valid input");
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(input);
  };
  return (
    <div className={loginStyle.login}>
      <div className={`${loginStyle.header} position-absolute w-100`}>
        <div className="container py-2">
          <h1 className={`${loginStyle.fs48}`}>Tiệm gốm nhà lá</h1>
        </div>
      </div>
      <div
        className={`${loginStyle.loginForm} d-flex justify-content-center align-items-center`}
      >
        <div className={`${loginStyle.form} p-5 border-black row`}>
          <div className="col-md-6 px-5">
            <h2>ĐĂNG NHẬP</h2>
            <div className="py-2">
              <span className="input-icon-left search-with-icon w-100">
                <i className="bi bi-person"></i>
                <input
                  name="email"
                  type="text"
                  placeholder="Email/Số điện thoại/Tên đăng nhập"
                  onChange={handleInput}
                />
              </span>
            </div>
            <div className="py-2">
              <span className="input-icon-left search-with-icon w-100">
                <i className="bi bi-lock"></i>
                <input
                  name="password"
                  type="text"
                  placeholder="Mật khẩu"
                  onChange={handleInput}
                />
              </span>
            </div>
            <div className={`${loginStyle.remember}`}>
              <input type="checkbox" className="checkbox-green" />{" "}
              <span>Nhớ mật khẩu</span>
            </div>
            <button className="btn btn-green mt-2" onClick={handleSubmitEvent}>
              Đăng nhập
            </button>
            <button className="btn mt-2">Quên mật khẩu</button>
          </div>
          <div className="col-md-6 px-5">
            <h2>TẠO TÀI KHOẢN</h2>
            <div className="py-2">
              <span className="input-icon-left search-with-icon w-100">
                <i className="bi bi-person"></i>
                <input type="text" placeholder="Tên" />
              </span>
            </div>
            <div className="py-2">
              <span className="input-icon-left search-with-icon w-100">
                <i className="bi bi-telephone"></i>
                <input type="text" placeholder="Số điện thoại" />
              </span>
            </div>
            <div className="py-2">
              <span className="input-icon-left search-with-icon w-100">
                <i className="bi bi-lock"></i>
                <input type="password" placeholder="Mật khẩu" />
              </span>
            </div>
            <div className="py-2">
              <span className="input-icon-left search-with-icon w-100">
                <i className="bi bi-lock"></i>
                <input type="password" placeholder="Nhập lại mật khẩu" />
              </span>
            </div>
            <button className="btn btn-green mt-2">Đăng ký</button>
          </div>
          <hr />
          <div className="d-flex justify-content-center align-items-center">
            <button className={` btn ${loginStyle.btnSocial}  `}>
              <img className={loginStyle.logoImg} src={fbLogo} alt="" />
              &nbsp;ĐĂNG NHẬP VỚI FACEBOOK
            </button>
            <button className={` btn ${loginStyle.btnSocial}  `}>
              <img className={loginStyle.logoImg} src={ggLogo} alt="" />
              &nbsp;ĐĂNG NHẬP VỚI GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
