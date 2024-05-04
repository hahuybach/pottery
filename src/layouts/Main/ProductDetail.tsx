import { Rate } from 'antd';
import { ReactNode, useEffect, useState } from 'react';
import productStyle from './productDetail.module.css';
import Feedback from '../../component/Feedback/Feedback';
import prodImg from '../../assets/home/vase.jpg';
import InputNumber from '../../component/InputNumber/InputNumber';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import numeral from 'numeral';
// register Swiper custom elements
register();
export default function ProductDetail(props: any) {
    const [totalPrice, setTotalPrice] = useState(props.price);
    const [quantity, setQuantity] = useState(1);
    const [activePicture, setActivePicture] = useState(props.pictures[0]);
    const getStars = (): JSX.Element[] => {
        const stars = [];
        <SwiperSlide>Slide 8</SwiperSlide>;
        for (let index = 5; index > 0; index--) {
            stars.push(
                <>
                    <Rate value={index} disabled />
                    <br />
                </>
            );
        }
        return stars;
    };
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((quantity) => quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity((quantity) => quantity + 1);
    };
    useEffect(() => {
        setTotalPrice(quantity * props.price);
    }, [quantity, props.price]);
    return (
        <>
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className={productStyle.currentImg}>
                        <img src={activePicture} alt="" />
                    </div>
                    <Swiper
                        className="mt-3"
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={100}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation={true}
                    >
                        {props.pictures.map((item, index: number) => (
                            <SwiperSlide
                                key={index}
                                className={productStyle.slideImg}
                                onClick={() => setActivePicture(item)}
                            >
                                <img src={item} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="col-md-6 ps-5">
                    <h1 className="productName mb-5">{props.productName}</h1>
                    <Rate disabled allowHalf={true} value={props.rating} />{' '}
                    <span className="">
                        {props.rating} | Đã bán {props.soldItem}
                    </span>
                    <hr />
                    <div className="d-flex align-items-center py-2">
                        <h3 className="me-5">Màu</h3>
                        {props?.color.map((item, index) => (
                            <div
                                key={index}
                                className={`circle-color ms-2`}
                                style={{ backgroundColor: item }}
                            ></div>
                        ))}
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <h3 className="me-5">Số lượng:</h3>
                        <div className="">
                            <InputNumber
                                value={quantity}
                                onIncrease={increaseQuantity}
                                onDecrease={decreaseQuantity}
                            />
                        </div>
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <h2 className="me-5">Hóa đơn của bạn:</h2>
                        <div className="totalPrice">
                            {numeral(totalPrice).format('0,0')}
                        </div>
                    </div>
                    <div className="div">
                        <button className="btn btn-white me-2">
                            Thêm vào giỏ hàng
                        </button>
                        <button className="btn btn-green">Mua ngay</button>
                        <br />
                        <i className="bi bi-heart"></i>
                        <label className="ms-1 mt-3">
                            Đã thích ({props.favorite})
                        </label>
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
                                <label className="fs-16">
                                    Mô tả về sản phẩm:
                                </label>
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
                    <Rate value={props.rating} />{' '}
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
                            userName={'Bach'}
                            ava={prodImg}
                            content={'Sản phẩm tốt đấy'}
                            prodImg={[prodImg, prodImg]}
                            rating={3}
                            date={'11/11/2023'}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
