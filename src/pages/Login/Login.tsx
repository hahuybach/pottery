import loginStyle from './login.module.css';
import fbLogo from './../../assets/logo/fb_logo.jpg';
import ggLogo from './../../assets/logo/gg_logo.jpg';
import { useEffect, useState } from 'react';
import { useAuth } from '../../provider/AuthProvider';
import { redirect, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
export default function Login() {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: '',
        password: '',
    });
    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (input.email !== '' && input.password !== '') {
            auth.loginAction(input);
            return;
        }
        alert('pleae provide a valid input');
    };
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
        console.log(input);
    };
    const handleLoginFacebook = () => {
        window.location.href =
            'http://localhost:8080/oauth2/authorization/facebook';
        console.log('fb');
    };
    const auth = useAuth();
    const loginGG = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            console.log(codeResponse);

            // auth.loginAction(codeResponse)
        },
        onError: (error) => console.log('Login Failed:', error),
    });
    useEffect(() => {
        if (user) {
            user == [] ? console.log(user) : console.log('Empty user');
            console.log(user);
            console.log(user.access_token);
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json',
                        },
                    }
                )
                .then((res) => {
                    setProfile(res.data);
                    console.log(res);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);
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
                            <input type="checkbox" className="checkbox-green" />{' '}
                            <span>Nhớ mật khẩu</span>
                        </div>
                        <button
                            className="btn btn-green mt-2"
                            onClick={handleSubmitEvent}
                        >
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
                                <input
                                    type="text"
                                    placeholder="Số điện thoại"
                                />
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
                                <input
                                    type="password"
                                    placeholder="Nhập lại mật khẩu"
                                />
                            </span>
                        </div>
                        <button className="btn btn-green mt-2">Đăng ký</button>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-center align-items-center">
                        <button
                            type="button"
                            className={` btn ${loginStyle.btnSocial}  `}
                            onClick={handleLoginFacebook}
                        >
                            <img
                                className={loginStyle.logoImg}
                                src={fbLogo}
                                alt=""
                            />
                            &nbsp;ĐĂNG NHẬP VỚI FACEBOOK
                        </button>
                        <button
                            type="button"
                            className={` btn ${loginStyle.btnSocial}  `}
                            onClick={loginGG}
                        >
                            <img
                                className={loginStyle.logoImg}
                                src={ggLogo}
                                alt=""
                            />
                            &nbsp;ĐĂNG NHẬP VỚI GOOGLE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
