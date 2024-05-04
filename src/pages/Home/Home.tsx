import { NavLink } from 'react-router-dom';
import Card from '../../component/Card/Card';
import vaseImage from './../../assets/home/vase.jpg';
import homeStyle from './home.module.css';
export default function Home() {
    return (
        <>
            <div className="row mt-5">
                <div className="col-md-5 px-5 d-flex align-items-center">
                    <div>
                        <h1 className="mb-4">LỌ HOA</h1>
                        <p className="label-2 pe-5">
                            Bình hoa hay lọ hoa là một vật dụng trang trí giúp
                            căn nhà của chúng ta trông lộng lẫy và sang trọng
                            hơn. Hiện nay có rất nhiều loại bình với thiết kế
                            đẹp, bắt mắt nhưng bình hoa làm từ gốm sứ vẫn thân
                            thuộc và đa dạng phong cách hơn.
                        </p>
                        <NavLink className="green-color label-2" to={'/vase'}>
                            Tìm hiểu thêm
                        </NavLink>
                    </div>
                </div>
                <div className="col-md-7">
                    <img
                        className={homeStyle.homeIntroImg}
                        src={vaseImage}
                        alt=""
                    />
                </div>
                <div className="categories my-5">
                    <h1 className="text-center">Categories</h1>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className={homeStyle.cateItem}>
                            <img src={vaseImage} alt="" />
                            <div className="text-center  h3 mt-3">
                                <a className="underline green-color" href="">
                                    BỘ ẤM TRÀ
                                </a>
                            </div>
                        </div>
                        <div className={homeStyle.cateItem}>
                            <img src={vaseImage} alt="" />
                            <div className="text-center  h3 mt-3">
                                <a className="underline green-color" href="">
                                    ĐỒ NHÀ BẾP
                                </a>
                            </div>
                        </div>
                        <div className={homeStyle.cateItem}>
                            <img src={vaseImage} alt="" />
                            <div className="text-center  h3 mt-3">
                                <a className="underline green-color" href="">
                                    ĐỒ TRANG TRÍ
                                </a>
                            </div>
                        </div>
                        <div className={homeStyle.cateItem}>
                            <img src={vaseImage} alt="" />
                            <div className="text-center h3 mt-3">
                                <a className="underline green-color" href="">
                                    ĐỒ THỜ
                                </a>
                            </div>
                        </div>
                        <div className={homeStyle.cateItem}>
                            <img src={vaseImage} alt="" />
                            <div className="text-center  h3 mt-3">
                                <a className="underline green-color" href="">
                                    ĐỒ THỦY TINH
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bestSeller my-5">
                    <h1 className="text-center">Bán chạy nhất</h1>
                    <div className="row">
                        {/* load data from backend */}
                        <div className="col-md-3">
                            <Card
                                imgUrl={vaseImage}
                                title={'Lorem ipsum'}
                                reviewRating={4}
                                reviewNum={20}
                                price={'350.000'}
                                soldItem={90}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-7">
                    <img
                        className={homeStyle.homeIntroImg}
                        src={vaseImage}
                        alt=""
                    />
                </div>
                <div className="col-md-5 px-5 d-flex align-items-center">
                    <div>
                        <h1 className="mb-4">DECOR TREND</h1>
                        <p className="label-2 pe-5">
                            Bình hoa hay lọ hoa là một vật dụng trang trí giúp
                            căn nhà của chúng ta trông lộng lẫy và sang trọng
                            hơn. Hiện nay có rất nhiều loại bình với thiết kế
                            đẹp, bắt mắt nhưng bình hoa làm từ gốm sứ vẫn thân
                            thuộc và đa dạng phong cách hơn.
                        </p>
                        <a className="green-color label-2" href="">
                            Tìm hiểu thêm
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
