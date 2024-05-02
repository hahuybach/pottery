import numeral from "numeral";
import ProductItem from "../ProductItem/ProductItem";
import style from "./listProduct.module.css";
export default function ListProduct({ products, totalPrice }) {
  return (
    <div className="mt-5 px-4">
      {products.map((item, index) => (
        <>
          <ProductItem item={item} />
          <hr className="my-3" />
        </>
      ))}
      <div className="voucher d-flex justify-content-between align-items-center">
        <div className="">
          <input
            type="text"
            placeholder="Mã ưu đãi"
            className={`${style.voucherInput} fs-16`}
          />
        </div>
        <div className="">
          <button className="btn btn-green">ÁP DỤNG</button>
        </div>
      </div>
      <hr className="my-3" />
      <div className="d-flex justify-content-between fs-16">
        <div className="">Tạm tính:</div>
        <div className="">{numeral(totalPrice).format("0,0")}</div>
      </div>
      <div className="d-flex justify-content-between fs-16">
        <div className="">Phí vận chuyển:</div>
        <div className="">-</div>
      </div>
      <hr className="my-3" />
      <div className="d-flex justify-content-between fs-16">
        <h3>Tổng cộng:</h3>
        <div className="">
          <span className="me-3">VND</span>
          <span className="h2">{numeral(totalPrice).format("0,0")}</span>
        </div>
      </div>
    </div>
  );
}
