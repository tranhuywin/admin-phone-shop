import "./OrderList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function OrderList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="orderListUser">
                        <img
                            className="orderListImg"
                            src={params.row.avatar}
                            alt=""
                        />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 180,
        },
        {
            field: "action",
            headerName: "Action",
            width: 180,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/order/" + params.row.id}>
                            <button className="orderListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="orderListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
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
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                checkboxSelection
            />
        </div>
    );
}
