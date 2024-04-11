import cardStyle from "./card.module.css";
import { Rate } from "antd";
export default function Card(props: any) {
  return (
    <>
      <div className={`${cardStyle.card}`}>
        <div className={`${cardStyle.cardImg}`}>
          <img src={props?.imgUrl} alt="" />
        </div>
        <h3 className="my-3">{props?.title}</h3>
        <div className="d-flex my-3">
          <Rate disabled value={props.reviewRating} />
          <div className="ms-2">
            <h4>({props.reviewNum} đánh giá)</h4>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className={cardStyle.price}>{props.price}</h2>
          <h4>Đã bán {props?.soldItem ? props.soldItem : 0}</h4>
        </div>
      </div>
    </>
  );
}
