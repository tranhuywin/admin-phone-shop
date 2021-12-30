import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import "./user.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

export default function User() {
    const [User, setUser] = useState();
    let { userId } = useParams();
    useEffect(() => {
      const access_token = Cookies.get("access_token");

        axios.get("https://twin-shop.herokuapp.com/user/" + userId, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + access_token,
                },
            })
            .then((res) => {
              setUser(res.data);
            });
    }, []);
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Chỉnh sửa người dùng</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Tạo</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">
                                {User?.firstName +" "+ User?.lastName}
                            </span>
                            <span className="userShowUserTitle">{User?.typeRole}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">
                            Chi tiết tài khoản
                        </span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                {User?.email}
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                {User?.registerDate}
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                Thủ Đức, Hồ Chí Minh
                            </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Chỉnh sửa</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder={User?.email}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Họ</label>
                                <input
                                    type="text"
                                    placeholder={User?.firstName}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Tên</label>
                                <input
                                    type="text"
                                    placeholder={User?.lastName}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Địa chỉ</label>
                                <input
                                    type="text"
                                    placeholder="Thủ Đức, Hồ Chí Minh"
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"
                                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    style={{ display: "none" }}
                                />
                            </div>
                            <button className="userUpdateButton">
                                Cập nhập
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
