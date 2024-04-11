import footerStyle from "./footer.module.css";
import visaImage from "./../../assets/payment/visa.webp";
import mastercardImage from "./../../assets/payment/mastercard.svg";
import momoImage from "./../../assets/payment/momo.png";
import vietnamImage from "./../../assets/language/vietnam.png";
// Then in your component's render method:

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
      <div className="margin">
        <table className="w-100">
          <tbody>
            <tr className="">
              <td>
                <label className="label-3">HƯỚNG DẪN MUA HÀNG</label>
              </td>
              <td>
                <label className="label-3">PHƯƠNG THỨC THANH TOÁN</label>
              </td>
              <td>
                <label className="label-3">NHẬN THÔNG TIN TỪ CHÚNG TÔI</label>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label-3">CHÍNH SÁCH ĐỔI TRẢ</label>
              </td>
              <td className={`${footerStyle.payment}  `}>
                <img src={visaImage} alt="Visa" />
                <img src={mastercardImage} alt="Mastercard" />
                <img src={momoImage} alt="Momo" />
              </td>
              <td className="">
                <input
                  className={`input ${footerStyle.sentToEmail}`}
                  type="text"
                  placeholder="Vui lòng nhập email của bạn"
                />
                <button className={`${footerStyle.btnSent}`}>
                  <i className="bi bi-chevron-right"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />
      <div className="container">
        <div className="language">
          <img src={vietnamImage} alt="" className={footerStyle.circleImg} />
          <label className="label-3 mx-3">&nbsp;Việt Nam</label>
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <div>
            <h4>GIỚI THIỆU</h4>
          </div>
          <div>
            <h4>CHÍNH SÁCH VẬN CHUYỂN</h4>
          </div>
          <div>
            <h4>QUY CHẾ HOẠT ĐỘNG</h4>
          </div>
          <div>
            <h4>CHÍNH SÁCH BẢO MẬT</h4>
          </div>
          <div>
            <h4>FEEDBACK</h4>
          </div>
        </div>
        <div
          className={`py-5 d-flex flex-column justify-content-center align-items-center ${footerStyle.socialMedia}`}
        >
          <h2>KẾT NỐI VỚI CHÚNG TÔI!</h2>
          <div
            className={`${footerStyle.socialMediaIcon} d-flex justify-content-between align-items-center `}
          >
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-telephone"></i>
          </div>
        </div>
      </div>
    </>
  );
}
