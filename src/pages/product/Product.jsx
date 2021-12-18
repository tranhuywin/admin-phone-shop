import { Link, useParams } from "react-router-dom";
import "./product.css";
import {
    Publish,
    PermIdentity,
    StoreSharp,
    Money,
    Memory,
    ColorLens,
} from "@material-ui/icons";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Product() {
    const [Product, setProduct] = useState();
    let { productId } = useParams();
    useEffect(() => {
        axios
            .get("https://twin-shop.herokuapp.com/products/" + productId)
            .then((res) => {
                setProduct(res.data);
            });
    }, []);
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
                            src={Product?.thumbnail}
                            alt=""
                            className="productInfoImg"
                        />
                        <span className="productName">{Product?.name}</span>
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
                            <span className="productInfoValue">
                                {Product?.id}
                            </span>
                        </div>

                        <div className="userShowInfo">
                            <StoreSharp className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Tên:
                            </span>
                            <span className="productInfoValue">
                                {Product?.name}
                            </span>
                        </div>

                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Nhãn hiệu:
                            </span>
                            <span className="productInfoValue">
                                {Product?.brand}
                            </span>
                        </div>

                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                description:
                            </span>
                            <span className="productInfoValue">
                                {Product?.description}
                            </span>
                        </div>

                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Giá khuyến mãi (sp có giá nhỏ nhất):
                            </span>
                            <span className="productInfoValue">
                                {Product?.marketPrice}
                            </span>
                        </div>

                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="productInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Giá bán (sp có giá nhỏ nhất):
                            </span>
                            <span className="productInfoValue">
                                {Product?.price}
                            </span>
                        </div>

                        {Product?.memories.length > 0 && (
                            <span className="userShowTitle">
                                Bộ nhớ điện thoại
                            </span>
                        )}
                        {Product?.memories.length > 0 &&
                            Product?.memories.map((memory, index) => {
                                return (
                                    <div key={index}>
                                        <div className="userShowInfo">
                                            <Memory className="userShowIcon" />
                                            <span
                                                className="productInfoKey"
                                                style={{ margin: "0 12px" }}
                                            >
                                                RAM:
                                            </span>
                                            <span className="productInfoValue">
                                                {memory.Ram} GB
                                            </span>
                                            <span
                                                className="productInfoKey"
                                                style={{ margin: "0 12px" }}
                                            >
                                                ROM:
                                            </span>
                                            <span className="productInfoValue">
                                                {memory.Rom} GB
                                            </span>
                                        </div>
                                        <div className="userShowInfo">
                                            {memory.colors.map((color) => {
                                                return (
                                                    <Link to={"/color/" + color.id}>
                                                        <button
                                                            className="productListEdit"
                                                            style={{
                                                                margin: "0 12px",
                                                            }}
                                                        >
                                                            {color.HexRGB}
                                                        </button>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}

                        {Product?.colorAccessory.length > 0 && (
                            <span className="userShowTitle">màu phụ kiện</span>
                        )}
                        {Product?.colorAccessory.length > 0 &&
                            Product?.colorAccessory.map((color, index) => {
                                return (
                                    <div className="userShowInfo" key={index}>
                                        <ColorLens className="userShowIcon" />
                                        <span
                                            className="productInfoKey"
                                            style={{ margin: "0 12px" }}
                                        >
                                            Mã màu:
                                        </span>
                                        <span className="productInfoValue">
                                            {color.HexRGB}
                                        </span>
                                        <Link to={"/color/" + color.id}>
                                            <button
                                                className="productListEdit"
                                                style={{ margin: "0 12px" }}
                                            >
                                                Chi tiết
                                            </button>
                                        </Link>
                                    </div>
                                );
                            })}
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
                                    placeholder={Product?.name}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Nhãn hiệu</label>
                                <input
                                    type="text"
                                    placeholder={Product?.brand}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Mô tả</label>
                                <input
                                    type="text"
                                    placeholder={Product?.description}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Giá bán</label>
                                <input
                                    type="text"
                                    placeholder={Product?.price}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Giá khuyến mãi</label>
                                <input
                                    type="text"
                                    placeholder={Product?.marketPrice}
                                    className="userUpdateInput"
                                />
                            </div>
                            {Product?.memories.length > 0 &&
                                Product?.memories.map((memory, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="userUpdateItem"
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            <div>
                                                <label>RAM</label>
                                                <input
                                                    type="text"
                                                    placeholder={
                                                        memory.Ram + " GB"
                                                    }
                                                    className="userUpdateInput"
                                                />
                                            </div>

                                            <div style={{ margin: "0 20px" }}>
                                                <label>ROM</label>
                                                <input
                                                    type="text"
                                                    placeholder={
                                                        memory.Rom + " GB"
                                                    }
                                                    className="userUpdateInput"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                        <div className="productFormRight">
                            <div className="productUpload">
                                <img
                                    src={Product?.thumbnail}
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
