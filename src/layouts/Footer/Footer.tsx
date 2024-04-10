import footerStyle from "./footer.module.css";
export default function Footer() {
  return (
    <>
      <div
        className={`${footerStyle.footerContainer} d-flex justify-content-around align-items-center my-3 mb-5 margin  `}
      >
        <div className="footer-item d-flex flex-column justify-content-center align-items-center px-3 ">
          <i className="bi bi-truck"></i>
          <h3 className="text-center">GIAO HÀNG ĐẢM BẢO VÀ NHANH CHÓNG</h3>
          <br />
        </div>
        <div className="footer-item d-flex flex-column justify-content-center align-items-center px-3 ">
          <i className="bi bi-wallet2"></i>
          <h3 className="text-center">
            THANH TOÁN ĐƠN GIẢN, NHANH CHÓNG VÀ BẢO MẬT
          </h3>
          <br />
        </div>
        <div className="footer-item d-flex flex-column justify-content-center align-items-center px-3 ">
          <i className="bi bi-telephone"></i>
          <h3 className="text-center">HOTLINE: 0989111396</h3>
          <br />
        </div>
        <div className="footer-item d-flex flex-column justify-content-center align-items-center px-3 ">
          <i className="bi bi-hand-thumbs-up"></i>
          <h3 className="text-center">CAM KẾT SẢN PHẨM CHẤT LƯỢNG</h3>
          <br />
        </div>
      </div>
      <hr />
      <div
        className={`margin d-flex justify-content-between align-items-center`}
      >
        <div className="">
          <label className="label-3">HƯỚNG DẪN MUA HÀNG</label>
          <br />
          <label className="label-3">CHÍNH SÁCH ĐỔI TRẢ</label>
        </div>
        <div className="">
          <label className="label-3">HƯỚNG DẪN MUA HÀNG</label>
          <br />
          <label className="label-3">CHÍNH SÁCH ĐỔI TRẢ</label>
        </div>
        <div className="">
          <label className="label-3">HƯỚNG DẪN MUA HÀNG</label>
          <br />
          <label className="label-3">CHÍNH SÁCH ĐỔI TRẢ</label>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="language"></div>
        
      </div>
    </>
  );
}
