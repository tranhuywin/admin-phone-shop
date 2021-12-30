import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from '@material-ui/lab/Skeleton';

export default function Home() {
    const [dataOrder, setDataOrder] = useState();

    useEffect(() => {
        axios
            .get("https://twin-shop.herokuapp.com/order/analytics/2021")
            .then((res) => {
                setDataOrder(res.data);
            });
    }, []);

    return (
        <div className="home">
            <FeaturedInfo />
            {dataOrder?.length ? (
                <Chart
                    data={dataOrder}
                    title="Phân tích doanh số đơn hàng"
                    grid
                    dataKey="totalPrice"
                />
            ): (<Skeleton variant="rect" width={1175} height={365} />)}
            <div className="homeWidgets">
                <WidgetLg />
            </div>
        </div>
    );
}
