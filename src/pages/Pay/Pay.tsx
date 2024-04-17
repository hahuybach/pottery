import { Select } from "antd";
import style from "./pay.module.css";
import { useEffect, useState } from "react";
import { getProvince } from "../../service/ProvinceService";
interface Province {
  province_id: number;
  province_name: string;
  province_type: string;
}
interface District {
  district_id: number;
  district_name: string;
}
export default function Pay() {
  const [provinces, setProvinces] = useState<Province[] | []>([]);
  const [selectedProvinceId, setSelectedProvinceId] = useState(0);
  const [districts, setDistricts] = useState([]);
  const [selectedDistrictId, setSelectedDistrictId] = useState(null);
  useEffect(() => {
    const getDistricts = async () => {
      try {
        const result = await getProvince(
          "/api/province/district/" + selectedProvinceId
        );
        setDistricts(result["results"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getDistricts();
  }, [selectedProvinceId]);
  useEffect(() => {
    const getProvinces = async () => {
      try {
        const result = await getProvince("/api/province");
        setProvinces(result["results"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getProvinces();
  }, []);
  const handleProvinceChange = (value: number) => {
    setSelectedProvinceId(value);
    setSelectedDistrictId(null);
  };
  const handleDistrictChange = (value: number) => {
    setSelectedDistrictId(value);
  };
  return (
    <>
      <div className="row ">
        <div className="col-md-7">
          <div className="breadcrumb"></div>
          <label className="fs-24 fw-500 mb-3">Thông tin giao hàng</label>
          <div className={`${style.shipping} row pe-4`}>
            <div className="col-md-12 mb-2">
              <input type="text" placeholder="Họ và tên" />
            </div>
            <div className="col-md-5 mb-2">
              <input type="text" placeholder="Số điện thoại" />
            </div>
            <div className="col-md-7 mb-2">
              <input type="text" placeholder="Email" />
            </div>
            <div className="col-md-12 mb-2">
              <input type="text" placeholder="Địa chỉ" />
            </div>
            <div className="col-md-6">
              <Select
                className={`${style.paySelect}`}
                onSelect={(value) => handleProvinceChange(value)}
                placeholder={"Tỉnh/thành phố"}
              >
                {provinces.map((item: Province) => (
                  <Select.Option
                    key={item.province_id}
                    value={item.province_id}
                  >
                    {item.province_name}
                  </Select.Option>
                ))}
              </Select>
            </div>
            <div className="col-md-6">
              <Select
                className={`${style.paySelect}`}
                onChange={handleDistrictChange}
                value={selectedDistrictId}
                placeholder={"Quận/huyện"}
              >
                {districts.map((item: District) => (
                  <Select.Option
                    key={item.district_id}
                    value={item.district_id}
                  >
                    {item.district_name}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>
          <label className="fs-24 fw-500 my-3">Phương thức thanh toán</label>
          <div className="d-flex flex-wrap">
            <div className={`${style.paymentItem} fs-16 fw-600 mb-2`}>
              Thẻ ATM Nội Địa (Internet Banking)
            </div>
            <div className={`${style.paymentItem} fs-16 fw-600 mb-2`}>
              Ví Điện Tử MoMo
            </div>
            <div className={`${style.paymentItem} fs-16 fw-600 mb-2`}>
              Thẻ Tín Dụng/Ghi Nợ
            </div>
            <div className={`${style.paymentItem} fs-16 fw-600 mb-2`}>
              Thanh Toán Khi Nhận Hàng
            </div>
          </div>
        </div>
        <div className="col-md-5"></div>
      </div>
    </>
  );
}
