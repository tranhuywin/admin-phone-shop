import { Link, useParams } from "react-router-dom";
import "./color.css";
import {
    Publish,
    PermIdentity,
    StoreSharp,
    Money,
} from "@material-ui/icons";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Product() {
    const [Color, setColor] = useState();
    let { colorsId } = useParams();
    useEffect(() => {
        axios
            .get("https://twin-shop.herokuapp.com/colors/" + colorsId)
            .then((res) => {
                setColor(res.data);
            });
    }, []);

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Màu sản phẩm</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Tạo</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <div className="productInfoTop">
                        <img
                            alt=""
                            className="productInfoImg"
                            src={Color?.image}
                        ></img>
                        <span className="productName" style={{color: Color?.HexRGB}}>{Color?.HexRGB}</span>
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
                            <span className="productInfoValue">{ Color?.id}</span>
                        </div>

                        <div className="userShowInfo">
                            <StoreSharp className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Số lượng:
                            </span>
                            <span className="productInfoValue">{Color?.quantity}</span>
                        </div>

                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Giá gốc:
                            </span>
                            <span className="productInfoValue">{Color?.originalPrice} VND</span>
                        </div>

                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Giá bán:
                            </span>
                            <span className="productInfoValue">{Color?.price} VND</span>
                        </div>

                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Giá khuyến mãi:
                            </span>
                            <span className="productInfoValue">{Color?.marketPrice} VND</span>
                        </div>
                    </div>
                </div>
                <div className="productTopRight">
                    <form className="productForm">
                        <div className="productFormLeft">
                            <span className="userUpdateTitle">Chỉnh sửa</span>
                            <div className="userUpdateItem">
                                <label>Mã màu sản phẩm</label>
                                <input
                                    type="text"
                                    placeholder={Color?.HexRGB}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Số lượng</label>
                                <input
                                    type="text"
                                    placeholder={Color?.quantity}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Giá gốc</label>
                                <input
                                    type="text"
                                    placeholder={Color?.originalPrice}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Giá bán</label>
                                <input
                                    type="text"
                                    placeholder={Color?.price}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Giá khuyến mãi</label>
                                <input
                                    type="text"
                                    placeholder={Color?.marketPrice}
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="productFormRight">
                            <div className="productUpload">
                                <img
                                    src={Color?.image}
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
                            <button className="productButton">Cập nhập</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="productBottom"></div>
        </div>
    );
}
