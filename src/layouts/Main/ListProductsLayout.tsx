import Card from "../../component/Card/Card";
import FilterMenu from "../../component/FilterMenu/FilterMenu";
import vaseImage from "../../assets/home/vase.jpg";
import { Menu, MenuProps, Select } from "antd";
import style from "./listProductsLayout.module.css";
interface Product {}
export default function ListProductLayout({products}) {
  const getProducts = (): JSX.Element[] => {
    const items = [];
    for (let index = 0; index < 15; index++) {
      items.push(
        <div key={index} className="col-md-4 mb-5">
          <Card
            imgUrl={vaseImage}
            productName={"Lorem ipsum"}
            rating={4}
            ratingNum={20}
            price={"350000"}
            soldItem={90}
          />
        </div>
      );
    }
    return items;
  };
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-3">
          <FilterMenu />
        </div>
        <div className="col-md-9 row ">
          <div className="d-flex justify-content-between mb-3">
            <Select
              // style={{ width: 200 }}
              className={style.filterSelect}
              defaultActiveFirstOption={true}
              defaultValue={"newest"}
            >
              <Select.Option value="newest">Mới nhất</Select.Option>
              <Select.Option value="lowtohigh">Giá: Thấp đến Cao</Select.Option>
              <Select.Option value="hightolow">Giá: Cao đến Cao</Select.Option>
              <Select.Option value="rating">Đánh giá</Select.Option>
            </Select>
            <div className="pagination">Pagination</div>
          </div>
          {getProducts()}
        </div>
      </div>
    </>
  );
}
