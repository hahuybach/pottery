import { Rate } from "antd";
import style from "./feedback.module.css";
export default function Feedback(props) {
  return (
    <>
      <div className="d-flex">
        <div className={` ${style.ava} me-2`}>
          <img src={props.ava} alt="" />
        </div>
        <div className="feedbackUserInfo">
          <h3>{props.userName}</h3>
          <Rate value={props.rating} />
        </div>
      </div>
      <div className="feedback px-4 py-2">
        <p className="m-0">{props.content}</p>
      </div>
      <div className="prodImg d-flex px-4 py-2">
        {props?.prodImg.map((item: any, index: number) => (
          <div key={index} className={`${style.prodImgItem} me-3`}>
            <img src={item} alt="" />
          </div>
        ))}
      </div>
      <div className="px-4 py-2 d-flex justify-content-between">
        <div className="date">{props.date}</div>
        <div className="reaction">
          <i className="bi bi-hand-thumbs-up"></i>({props.like})
          <i className="bi bi-hand-thumbs-down"></i>({props.dislike})
        </div>
      </div>
    </>
  );
}
