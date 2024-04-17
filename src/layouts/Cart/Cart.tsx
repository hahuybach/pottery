import { useState } from "react";
import ProductItem from "../../component/ProductItem/ProductItem";
import vaseImg from "../../assets/home/vase.jpg";
import numeral from "numeral";
export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10000,
      quantity: 1,
      img: vaseImg,
      color: ["red", "yellow"],
    },
    {
      id: 2,
      name: "Product 2",
      price: 15000,
      quantity: 2,
      img: vaseImg,
      color: ["red", "yellow"],
    },
    // Add more items as needed
  ]);
  const updateQuantity = (itemId: number, newQuantity: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page ">
      <h2 className="text-center">GIỎ HÀNG CỦA BẠN</h2>
      <p className="h3 text-center">Số sản phẩm: {totalItems}</p>
      {cartItems.map((item) => (
        <ProductItem
          key={item.id}
          item={item}
          onUpdateQuantity={updateQuantity}
        />
      ))}
      <div className="text-end px-5">
        <span className="fs-24 fw-500">
          Tổng cộng:{" "}
          <span className="fw-700">{numeral(totalPrice).format("0,0")}đ</span>
        </span>
      </div>
      <div className="text-end px-5 my-4">
        <button className="btn btn-white me-3">TIẾP TỤC MUA</button>
        <button className="btn btn-green">ĐẶT HÀNG TẤT CẢ</button>
      </div>
    </div>
  );
}
