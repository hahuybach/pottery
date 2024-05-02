import numeral from "numeral";
import style from "./productItem.module.css";

export default function ProductItem({ item }) {
  return (
    <div className="row">
      <div className={`${style.productImg} col-md-3`}>
        <img src={item.imgUrl} alt="" />
        <div
          className={`${style.productQuantity} d-flex justify-content-center align-items-center `}
        >
          {item.quantity}
        </div>
      </div>
      <div className="col-md-7">
        <h3>{item.productName}</h3>
        <p className="fs-16 my-0">
          {numeral(item.price).format("0,0")}x{item.quantity}
        </p>
      </div>
      <div className="col-md-2">
        <span className="fs-16 label-2">
          {numeral(item.quantity * item.price).format("0,0")}
        </span>
      </div>
      {/* <hr className="my-2" /> */}
    </div>
  );
}
