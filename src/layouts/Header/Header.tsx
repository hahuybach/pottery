import { Dropdown, MenuProps, Space } from 'antd';
import headerStyle from './header.module.css';
import { useEffect, useState } from 'react';
import { getUserData } from '../../service/UserDataService';
import { googleLogout } from '@react-oauth/google';
import { NavLink } from 'react-router-dom';
export default function Header() {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const result = await getUserData();
                console.log(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchUserData();
    }, []);
    const nav = [
        { name: 'LỌ HOA', link: '/vase' },
        { name: 'BỘ ẤM TRÀ', link: '/teaset' },
        { name: 'ĐỒ TRANG TRÍ', link: '/ornament' },
        { name: 'ĐỒ NHÀ BẾP', link: '/kitchenware' },
        { name: 'ĐỒ THỜ', link: '/altar' },
        { name: 'ĐỒ THỦY TINH', link: '/glassware' },
        { name: 'DESIGN TREND', link: '/designtrend' },
    ];
    const items: MenuProps['items'] = [
        {
            label: 'Tài khoản',
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: 'Đăng xuất',
            key: '1',
        },
    ];
    return (
        <>
            <div className="margin">
                <div className="d-flex justify-content-between align-items-center pt-2">
                    <div className="headerName">
                        <h1 className={headerStyle.fs48}>Tiệm gốm nhà lá</h1>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="search-box me-5">
                            <input
                                className={`${headerStyle.searchInput} border-black`}
                                type="text"
                                placeholder="Search"
                            />
                        </div>
                        <div
                            className={`wishlist mx-1 ${headerStyle.headerItem}`}
                        >
                            <i className="bi bi-heart"></i>
                            <label className="ms-1">Wishlist</label>
                        </div>
                        <NavLink
                            to={'/cart'}
                            className={`shoppingcart mx-1 ${headerStyle.headerItem}`}
                        >
                            <i className="bi bi-cart"></i>
                            <label className="ms-1">Giỏ hàng</label>
                        </NavLink>
                        <div
                            className={`useraccount mx-1 ${headerStyle.headerItem}`}
                        >
                            <i className="bi bi-person"></i>
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <label className="ms-1">
                                        {userData ? userData : 'Tài khoản'}
                                    </label>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className="navLink d-flex justify-content-between align-items-center p-3">
                    {nav.map((item, index) => (
                        <NavLink to={item.link}>
                            <div key={index} className={headerStyle.navLinkItem}>
                                <label className="fs-14">{item.name}</label>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
}
