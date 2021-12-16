import { Link } from "react-router-dom";
import "./product.css";
import {
    Publish,
    PermIdentity,
    StoreSharp,
    Money,
    Memory,
    ColorLens,
} from "@material-ui/icons";

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Sản phẩm</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Tạo</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <div className="productInfoTop">
                        <img
                            src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="productInfoImg"
                        />
                        <span className="productName">IPhone 13 Pro</span>
                    </div>
                    <div className="productInfoBottom">
                        <span className="userShowTitle">Chi tiết sản phẩm</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                id:
                            </span>
                            <span className="productInfoValue">123</span>
                        </div>

                        <div className="userShowInfo">
                            <StoreSharp className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Số lượng:
                            </span>
                            <span className="productInfoValue">1000</span>
                        </div>

                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Giá gốc:
                            </span>
                            <span className="productInfoValue">10000</span>
                        </div>

                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Giá bán:
                            </span>
                            <span className="productInfoValue">10000</span>
                        </div>

                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Giá khuyến mãi:
                            </span>
                            <span className="productInfoValue">10000</span>
                        </div>

                        <span className="userShowTitle">Bộ nhớ điện thoại</span>
                        <div className="userShowInfo">
                            <Memory className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                RAM:
                            </span>
                            <span className="productInfoValue">125 GB</span>
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                ROM:
                            </span>
                            <span className="productInfoValue">12 GB</span>
                            <Link to={"/color/1 "}>
                                <button
                                    className="productListEdit"
                                    style={{ margin: "0 12px" }}
                                >
                                    Sửa
                                </button>
                            </Link>
                        </div>
                        <span className="userShowTitle">màu phụ kiện</span>
                        <div className="userShowInfo">
                            <ColorLens className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Mã màu:
                            </span>
                            <span className="productInfoValue">#000000</span>
                            <Link to={"/color/1 "}>
                                <button
                                    className="productListEdit"
                                    style={{ margin: "0 12px" }}
                                >
                                    Sửa
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="productTopRight">
                    <form className="productForm">
                        <div className="productFormLeft">
                        <span className="userUpdateTitle">Chỉnh sửa</span>
                            <div className="userUpdateItem">
                                <label>Tên sản phẩm</label>
                                <input
                                    type="text"
                                    placeholder="IPhone 13 pro"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Số lượng</label>
                                <input
                                    type="text"
                                    placeholder="1000"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Giá gốc</label>
                                <input
                                    type="text"
                                    placeholder="1000"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Giá bán</label>
                                <input
                                    type="text"
                                    placeholder="1000"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Giá khuyến mãi</label>
                                <input
                                    type="text"
                                    placeholder="1000"
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="productFormRight">
                            <div className="productUpload">
                                <img
                                    src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                    className="productUploadImg"
                                />
                                <label for="file">
                                    <Publish />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    style={{ display: "none" }}
                                />
                            </div>
                            <button className="productButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="productBottom"></div>
        </div>
    );
}
