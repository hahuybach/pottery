import headerStyle from "./header.module.css";
export default function Header() {
  const nav = [
    "LỌ HOA",
    "BỘ ẤM TRÀ",
    "ĐỒ TRANG TRÍ",
    "ĐỒ NHÀ BẾP",
    "ĐỒ THỜ",
    "ĐỒ THỦY TINH",
    "DESIGN TREND",
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
            <div className={`wishlist mx-1 ${headerStyle.headerItem}`}>
              <i className="bi bi-heart"></i>
              <label className="ms-1">Wishlist</label>
            </div>
            <div className={`shoppingcart mx-1 ${headerStyle.headerItem}`}>
              <i className="bi bi-cart"></i>
              <label className="ms-1">Giỏ hàng</label>
            </div>
            <div className={`useraccount mx-1 ${headerStyle.headerItem}`}>
              <i className="bi bi-person"></i>
              <label className="ms-1">Tài khoản</label>
            </div>
          </div>
        </div>
        <div className="navLink d-flex justify-content-between align-items-center p-3">
          {nav.map((item, index) => (
            <div key={index} className="navLinkItem">
              <label className="fs-14">{item}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
