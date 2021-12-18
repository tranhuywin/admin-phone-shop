import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductList() {
    const [data, setData] = useState();

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    useEffect(() => {
        axios.get("https://twin-shop.herokuapp.com/products/").then((res) => {
            setData(res.data);
        });
    }, []);

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Sản phẩm",
            width: 300,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img
                            className="productListImg"
                            src={params.row.thumbnail}
                            alt=""
                        />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "quantity", headerName: "số lượng", width: 140 },
        {
            field: "price",
            headerName: "giá bán (VND)",
            width: 170,
        },
        {
            field: "marketPrice",
            headerName: "giá khuyến mãi  (VND)",
            width: 200,
        },
        {
            field: "action",
            headerName: "Hàng động",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="productList">
            <div
                className="userTitleContainer"
                style={{ paddingBottom: "16px" }}
            >
                <h1 className="userTitle">Danh sách sản phẩm</h1>
                <Link to="/newProduct">
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
