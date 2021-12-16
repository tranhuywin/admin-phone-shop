import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Sản phẩm",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "số lượng", width: 140 },
    {
      field: "status",
      headerName: "Giá gốc",
      width: 140,
    },
    {
      field: "price",
      headerName: "giá bán",
      width: 140,
    },
    {
      field: "price",
      headerName: "giá khuyến mãi",
      width: 160,
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
      <div className="userTitleContainer" style={{paddingBottom: "16px"}}>
                <h1 className="userTitle">Danh sách sản phẩm</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Tạo</button>
                </Link>
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
