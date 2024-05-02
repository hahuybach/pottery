import { Select } from "antd";
import style from "./pay.module.css";
import { useEffect, useState } from "react";
import { getProvince } from "../../service/ProvinceService";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import vaseImg from "./../../assets/home/vase.jpg";
import ListProduct from "./ListProduct/ListProduct";
import numeral from "numeral";
import Card from "../../component/Card/Card";
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
  const [selectedDistrictId, setSelectedDistrictId] = useState<number | null>(
    null
  );
  const [paymentMethodId, setPaymentMethodId] = useState(1);
  const paymentMethods = [
    { id: 1, name: "Thẻ ATM Nội Địa (Internet Banking)" },
    { id: 2, name: "Ví Điện Tử MoMo" },
    { id: 3, name: "Thẻ Tín Dụng/Ghi Nợ" },
    { id: 4, name: "Thanh Toán Khi Nhận Hàng" },
  ];
  const products = [
    {
      id: 1,
      productName: "Product 1",
      price: 10000,
      quantity: 1,
      imgUrl: vaseImg,
      color: ["red", "yellow"],
      rating: 3,
      ratingNum: 21,
    },
    {
      id: 2,
      productName: "Product 2",
      price: 15000,
      quantity: 2,
      imgUrl: vaseImg,
      color: ["red", "yellow"],
      rating: 4,
      ratingNum: 20,
    },
    // Add more items as needed
  ];
  const totalPrice = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
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
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`${style.paymentItem} fs-16 fw-600 mb-2 ${
                  method.id === paymentMethodId ? style.activePaymentItem : ""
                }`}
                onClick={() => setPaymentMethodId(method.id)}
              >
                {method.name}
              </div>
            ))}
          </div>
          <hr />
          <PaymentMethod paymentMethodId={paymentMethodId} />
          <br />
          <label className="fs-24 fw-500 my-3">
            Điều khoản và điều kiện thanh toán
          </label>
          <p className={style.policy}>
            1. CHÍNH SÁCH VẬN CHUYỂN Phương thức vận chuyển: Chúng tôi sẽ giao
            hàng hóa/ sản phẩm cho quý khách qua các công ty vận chuyển theo địa
            chỉ người nhận hàng mà Quý khách đã đăng ký khi đặt hàng. Thời gian
            giao hàng: Thời gian giao hàng toàn quốc từ 3 đến 5 ngày làm việc kể
            từ khi đơn hàng được thanh toán thành công. Nếu quá thời hạn giao
            hàng đã cam kết mà Quý khách vẫn chưa nhận được sản phẩm đã đặt, Quý
            khách vui lòng thông báo tới bộ phận Chăm sóc khách hàng của Chúng
            tôi theo số điện thoại 0989111396 hoặc địa chỉ email
            tiemgomnhala@gmail.com để được hỗ trợ. Phí vận chuyển: Chúng tôi
            miễn phí giao hàng toàn quốc. 2. CHÍNH SÁCH ĐỔI/ TRẢ Các trường hợp
            đổi hàng: - Quý khách vui lòng kiểm tra sản phẩm khi nhận hàng, nếu
            quý khách phát hiện sản phẩm bị hư hại, Tiệm Gốm Nhà Lá sẽ thu hồi
            sản phẩm: • Đổi sản phẩm mới tối đa 10 ngày làm việc. • Hoàn tiền
            100% nếu không có sản phẩm thay thế. Các trường hợp không chấp nhận
            đổi hàng: • Quý khách muốn thay đổi mẫu mã, chủng loại nhưng không
            thông báo trước. • Quý khách vận hành không đúng theo chỉ dẫn, gây
            hỏng hóc sản phẩm. • Quý khách đã kiểm tra và ký nhận sản phẩm nhưng
            sau đó yêu cầu đổi/trả hàng với lý do lỗi ngoại quan (trầy xước,
            vỡ….) Điều kiện đổi hàng • Điều kiện về thời gian đổi hàng: trong
            vòng 14 ngày kể từ khi nhận được hàng. • Điều kiện về hóa đơn, chứng
            từ: Hoá đơn, Phiếu giao hàng. Quy trình, cách thức đổi hàng cho
            khách hàng: Bước 1: Xác nhận tình trạng hàng đổi Trong vòng 14 ngày,
            kể từ ngày nhận sản phẩm, nếu sản phẩm thuộc các trường hợp được đổi
            hàng, khách hàng tiến hành chụp hình hiện trạng của sản phẩm: Thấy
            rõ mã hàng, tem của Chúng tôi, chỗ sản phẩm hư hỏng, trầy xướt...
            Sau đó liên hệ trực tiếp bộ phận Chăm sóc Khánh hàng của Chúng tôi
            qua hotline để thông báo thông tin và gửi hình ảnh đến chúng tôi để
            xác nhận. Bước 2: Chúng tôi xác nhận Chúng tôi sau khi nhận được
            thông tin sẽ tiến hành xác nhận tình trạng hàng hóa và xác nhận cho
            khách hàng là có được đổi hay không. Sau khi được xác nhận hàng được
            chấp nhận đổi trả, vui lòng giữ hàng hóa trong trạng thái nguyên
            tem, mã hàng của Chúng tôi như ban đầu cùng giấy tờ liên quan: + Hóa
            đơn bán lẻ, Phiếu giao hàng. Bước 3: Khách hàng gởi hàng Quý khách
            gửi lại sản phẩm còn nguyên trong bao bì cùng các giấy tờ đã được
            nêu ở Bước 2 đến cho Chúng tôi theo địa chỉ: Đồng Than-Đồng Than-
            Yên Mỹ- Hưng Yên từ 10h00-19h00 (Thứ 2 đến Chủ nhật). Bước 4: Chúng
            tôi xác nhận và gởi hàng cho khách hàng Sau khi đã nhận, kiểm tra và
            chấp nhận sản phẩm mà Quý khách muốn đổi, bộ phận chăm sóc khách
            hàng sẽ liên hệ để đổi hàng và gởi hàng lại cho Quý khách Chi phí
            vận chuyển do việc đổi hàng sẽ do chúng tôi chi trả. 3. CHÍNH SÁCH
            HỦY ĐƠN HÀNG Chúng tôi không có chính sách huỷ đơn hàng sau khi đã
            thanh toán. Quý khách vui lòng kiểm tra kỹ đơn hàng trước khi thanh
            toán. Mọi thắc mắc về thủ tục đổi hàng, hủy đơn hàng xin vui lòng
            liên hệ theo thông tin sau: Hotline 0989111396 hoặc địa chỉ email
            tiemgomnhala@gmail.com
          </p>
          <div className="">
            <input type="checkbox" className="checkbox-green" name="" id="" />{" "}
            <span>
              Tôi đã đọc và chấp nhận các điều kiện và điều khoản thanh toán
            </span>
          </div>
        </div>
        <div className={`col-md-5 ${style.listProduct}`}>
          <ListProduct products={products} totalPrice={totalPrice} />
        </div>
        <div className={`col-md-12 ${style.payment} mt-5`}>
          <div className="row">
            <div className="col-md-7"></div>
            <div className="col-md-5 mt-2">
              <div className="d-flex justify-content-between px-4 py-2">
                <div className="fs-16">Tạm tính:</div>
                <div className="fs-16">{numeral(totalPrice).format("0,0")}</div>
              </div>
              <div className="d-flex justify-content-between px-4 py-2">
                <div className="fs-16">Phí vận chuyển:</div>
                <div className="fs-16">-</div>
              </div>
              <div className="d-flex justify-content-between px-4 py-2">
                <div className="fs-16">Voucher giảm giá:</div>
                <div className="fs-16">-</div>
              </div>
              <hr />
              <div className="d-flex justify-content-between px-4 py-2">
                <h3 className="fs-16">Tổng thanh toán</h3>
                <div className="fs-16">-</div>
              </div>
              <div className="d-flex justify-content-between px-4 py-2">
                <button className="btn fs-16">
                  <i className="bi bi-chevron-left"></i>&nbsp;&nbsp;Giỏ hàng
                </button>
                <button className="btn btn-green fs-16">THANH TOÁN</button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center mt-5 mb-3">SẢN PHẨM TƯƠNG TỰ</h1>

        {products.map((item, index) => (
          <div className="col-md-3">
            <Card {...item} />
          </div>
        ))}
      </div>
    </>
  );
}
