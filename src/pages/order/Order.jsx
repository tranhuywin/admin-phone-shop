import { Link, useParams } from "react-router-dom";
import "./order.css";
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

export default function Order() {
    const [Order, setOrder] = useState();
    let { ordersId } = useParams();
    useEffect(() => {
        axios
            .get("https://twin-shop.herokuapp.com/order/" + ordersId)
            .then((res) => {
                setOrder(res.data);
            });
    }, []);
    return (
        <div className="order">
            <div className="orderTitleContainer">
                <h1 className="orderTitle">Đặt hàng</h1>
            </div>
            <div className="orderTop">
                <div className="orderTopLeft">
                    <div className="orderInfoTop">
                    </div>
                    <div className="orderInfoBottom">
                        <span className="userShowTitle">Chi tiết sản phẩm</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span
                                className="orderInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                id:
                            </span>
                            <span className="orderInfoValue">{Order?.id}</span>
                        </div>

                        <div className="userShowInfo">
                            <StoreSharp className="userShowIcon" />
                            <span
                                className="orderInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Trạng thái:
                            </span>
                            <span className="orderInfoValue">
                                {Order?.status === 0 ? "Đang chờ xác nhận" : Order?.status === 1 ? "Đang giao hàng" : Order?.status === 2 ? "Đã giao hàng" : "Đã hủy"}
                            </span>
                        </div>

                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="orderInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Thời gian tạo:
                            </span>
                            <span className="orderInfoValue">
                                {Order?.createdAt}
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="orderInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Cập nhập gần nhất: 
                            </span>
                            <span className="orderInfoValue">
                                {Order?.updatedAt}
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="orderInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Tổng tiền: 
                            </span>
                            <span className="orderInfoValue">
                                {Order?.totalPrice} VND
                            </span>
                        </div>
                        <span className="userShowTitle">Thông tin người dùng</span>
                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="orderInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Thành phố/Tỉnh:
                            </span>
                            <span className="orderInfoValue">
                                {Order?.city}
                            </span>
                        </div>

                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="orderInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                quận/huyện:
                            </span>
                            <span className="orderInfoValue">
                                {Order?.district}
                            </span>
                        </div>

                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="orderInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Đường:
                            </span>
                            <span className="orderInfoValue">
                                {Order?.street}
                            </span>
                        </div>

                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="orderInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                y/c của người mua:
                            </span>
                            <span className="orderInfoValue">
                                {Order?.otherRequests}
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <Money className="userShowIcon" />
                            <span
                                className="orderInfoKey"
                                style={{ margin: "0 12px" }}
                            >
                                Số điện thoại:
                            </span>
                            <span className="orderInfoValue">
                                {Order?.phoneNumber}
                            </span>
                        </div>
                        
                        {Order?.orderItems.length > 0 && (
                            <span className="userShowTitle">
                                sản phẩm đặt mua
                            </span>
                        )}
                        {Order?.orderItems.length > 0 &&
                            Order?.orderItems.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="userShowInfo">
                                            <Memory className="userShowIcon" />
                                            <span
                                                className="orderInfoKey"
                                                style={{ margin: "0 12px" }}
                                            >
                                                id sản phẩm:
                                            </span>
                                            <span className="orderInfoValue">
                                                {item.color.id}
                                            </span>
                                            <span
                                                className="orderInfoKey"
                                                style={{ margin: "0 12px" }}
                                            >
                                                số lượng:
                                            </span>
                                            <span className="orderInfoValue">
                                                {item.quantity}
                                            </span>
                                        </div>
                                        <div className="userShowInfo">
                                        <Link to={"/color/" + item.color.id}>
                                            <button
                                                className="orderListEdit"
                                                style={{
                                                    margin: "0 12px",
                                                }}
                                            >
                                                {item.color.HexRGB}
                                            </button>
                                        </Link>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className="orderTopRight">
                    <form className="orderForm">
                        <div className="orderFormLeft">
                            <span className="userUpdateTitle">Chỉnh sửa</span>
                            <div className="userUpdateItem">
                                <label>y/c người mua</label>
                                <input
                                    type="text"
                                    placeholder={Order?.otherRequests}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Trạng thái</label>
                                <select
                                    type="text"
                                    placeholder={Order?.status}
                                    className="userUpdateInput"
                                >
                                    <option value="0">Đang chờ xác nhận</option>
                                    <option value="1">Đang giao hàng</option>
                                    <option value="2">Đã giao hàng</option>
                                    <option value="3">Đã hủy</option>
                                </select>
                            </div>
                            {Order?.orderItems.length > 0 &&
                                Order?.orderItems.map((item, index) => {
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
                                                <label>id sản phẩm</label>
                                                <input
                                                    type="text"
                                                    placeholder={
                                                        item.color.id
                                                    }
                                                    className="userUpdateInput"
                                                />
                                            </div>

                                            <div style={{ margin: "0 20px" }}>
                                                <label>số lượng</label>
                                                <input
                                                    type="text"
                                                    placeholder={
                                                        item.quantity
                                                    }
                                                    className="userUpdateInput"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                                <button className="orderButton" style={{width: '170px', marginTop: "28px"}}>Cập nhập</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="orderBottom"></div>
        </div>
    );
}
