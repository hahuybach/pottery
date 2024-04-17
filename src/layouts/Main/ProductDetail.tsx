import { Rate } from "antd";
import { ReactNode, useState } from "react";
import productStyle from "./productDetail.module.css";
import Feedback from "../../component/Feedback/Feedback";
import prodImg from "../../assets/home/vase.jpg";
export default function ProductDetail(props: any) {
  const [totalPrice, setTotalPrice] = useState(500000);
  const getStars = (): JSX.Element[] => {
    const stars = [];
    for (let index = 5; index > 0; index--) {
      stars.push(
        <>
          <Rate value={index} />
          <br />
        </>
      );
    }
    return stars;
  };
  return (
    <>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <h1 className="productName"></h1>
          <Rate disabled allowHalf={true} value={props.rating} />{" "}
          <span className="">
            {props.rating} | Đã bán {props.soldItem}
          </span>
          <hr />
          <div className="d-flex align-items-center py-2">
            <h3 className="me-5">Màu</h3>
            <div className="circle">circle</div>
          </div>
          <div className="d-flex align-items-center py-2">
            <h3 className="me-5">Số lượng:</h3>
            <div className="">
              <input type="number" defaultValue={1} />
            </div>
          </div>
          <div className="d-flex align-items-center py-2">
            <h2 className="me-5">Hóa đơn của bạn:</h2>
            <div className="totalPrice">{totalPrice}</div>
          </div>
          <div className="div">
            <button className="btn btn-white me-2">Thêm vào giỏ hàng</button>
            <button className="btn btn-green">Mua ngay</button>
            <br />
            <i className="bi bi-heart"></i>
            <label className="ms-1">Đã thích ({props.favorite})</label>
          </div>
          <hr />
          <div className="">
            <h3>Mô tả sản phẩm</h3>
            <div className="row">
              <div className="col-md-4">
                <label className="fs-16">Chất liệu:</label>
              </div>
              <div className="col-md-8">
                <label className="fs-16 ">Chất liệu</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label className="fs-16">Kích thước:</label>
              </div>
              <div className="col-md-8">
                <label className="fs-16 ">Chất liệu</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label className="fs-16">Mô tả về sản phẩm:</label>
              </div>
              <div className="col-md-12">
                <label className="fs-16 ">Chất liệu</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`row ${productStyle.rating} p-4`}>
        <div className="col-md-6">
          <h2>Đánh giá sản phẩm </h2>
          <Rate value={props.rating} />{" "}
          <span>
            {props.rating}/5 ({props.ratingNum})
          </span>
          <br />
          <button className="btn">Đánh giá ngay</button>
        </div>
        <div className="col-md-6 text-center">{getStars()}</div>
      </div>
      <div className={`row ${productStyle.feedback}`}>
        <div className="">
          <h3 className="py-4">Hình ảnh từ người mua</h3>
          <div className={`${productStyle.feedbackPics}`}></div>
          <div className={`${productStyle.feedbacks}`}>
            <Feedback
              userName={"Bach"}
              ava={prodImg}
              content={"Sản phẩm tốt đấy"}
              prodImg={[prodImg, prodImg]}
              rating={3}
              date={"11/11/2023"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
