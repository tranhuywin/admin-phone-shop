import "./OrderList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from '@material-ui/lab/Skeleton';

export default function OrderList() {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get("https://twin-shop.herokuapp.com/order/").then((res) => {
            res.data = res.data.map((item) => {
                item.status = item.status === 0 ? "Đang chờ xác nhận" : item.status === 1 ? "Đang giao hàng" : item.status === 2 ? "Đã giao hàng" : "Đã hủy";
                return item;
            });
            setData(res.data);
        });
    }, []);

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "status",
            headerName: "Trạng thái",
            width: 200,
        },
        { field: "totalPrice", headerName: "Tổng tiền (VND)", width: 170 },
        {
            field: "city",
            headerName: "Thành phố/Tỉnh",
            width: 180,
        },
        {
            field: "district",
            headerName: "Quận/huyện",
            width: 180,
        },
        {
            field: "action",
            headerName: "Action",
            width: 250,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/order/" + params.row.id}>
                            <button className="orderListEdit">Sửa</button>
                        </Link>
                        <Link to={"/order/" + params.row.id}>
                            <button className="orderListEdit">Sửa trạng thái</button>
                        </Link>
                    </>
                );
            },
        },
    ];

    return (
        <div className="orderList">
            <div
                className="userTitleContainer"
                style={{ paddingBottom: "16px" }}
            >
                <h1 className="userTitle">Danh sách đặt hàng</h1>
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
