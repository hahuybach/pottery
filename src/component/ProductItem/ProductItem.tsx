import { useState } from "react";
import InputNumber from "../InputNumber/InputNumber";
import style from "./productItem.module.css";
import numeral from "numeral";
import { Select } from "antd";
export default function ProductItem({ item, onUpdateQuantity }) {
  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  const increaseQuantity = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };
  return (
    <div className="cart-item row mb-5">
      <div className="col-md-9 d-flex">
        <div className="checkbox p-4">
          <input type="checkbox" className={`${style.cartCheckbox}`} />
        </div>
        <div className={`${style.cardItemImg} me-4`}>
          <img src={item.img} alt="" />
        </div>
        <div className={`${style.itemInfo}`}>
          <h3>{item.name}</h3>
          <Select
            // style={{ width: 200 }}
            className={style.filterSelect}
            defaultActiveFirstOption={true}
          >
            {item.color.map((product, index) => (
              <Select.Option key={index} value={product.color}>
                <div className="d-flex align-items-center">
                  <div className="me-2">Màu sắc</div>
                  <div className={`${product} ${style.color}`}></div>
                </div>
              </Select.Option>
            ))}
          </Select>
          <p className="fs-16 my-0">
            {item.quantity}x {numeral(item.price).format("0,0")}đ
          </p>
          <span className="fs-16 label-2">
            {numeral(item.quantity * item.price).format("0,0")}
          </span>
        </div>
      </div>
      <div className="col-md-3 d-flex">
        <div className="quantity-control d-flex justify-content-center align-items-center">
          <InputNumber
            value={item.quantity}
            onDecrease={decreaseQuantity}
            onIncrease={increaseQuantity}
            onUpdateQuantity={onUpdateQuantity}
          />
        </div>
        <div
          className={`${style.trash} d-flex justify-content-center align-items-center `}
        >
          <i className="bi bi-trash3"></i>
        </div>
      </div>
    </div>
  );
}
