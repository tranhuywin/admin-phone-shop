import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Skeleton from '@material-ui/lab/Skeleton';
import axios from "axios";
import Cookies from 'js-cookie';

export default function UserList() {
    const [data, setData] = useState();

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    useEffect(() => {
        const access_token = Cookies.get("access_token");
        axios.get("https://twin-shop.herokuapp.com/user/",{
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${access_token}`,
                }
              }
        ).then((res) => {
            setData(res.data);
        });
    }, []);

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "firstName",
            headerName: "Họ",
            width: 200,
        },
        { field: "lastName", headerName: "Tên", width: 200 },
        {
            field: "registerDate",
            headerName: "Ngày tạo",
            width: 160,
        },
        {
            field: "typeRole",
            headerName: "Loại tài khoản",
            width: 180,
        },
        {
            field: "Hành động",
            headerName: "Hành động",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Sửa</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <div className="userTitleContainer" style={{paddingBottom: "16px"}}>
                <h1 className="userTitle">Danh sách người dùng</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Tạo</button>
                </Link>
            </div>
            {data?.length > 0 ? (
                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                />
            ): (
              <div>
                <Skeleton variant="rect" height={40} />
                <br/>
                <Skeleton variant="rect" height={40} />
                <br/>
                <Skeleton variant="rect" height={40} />
                <br/>
                <Skeleton variant="rect" height={40} />
                <br/>
                <Skeleton variant="rect" height={40} />
              </div>
            )}
        </div>
    );
}
