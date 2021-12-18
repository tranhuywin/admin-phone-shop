import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect } from "react";
import axios from "axios";

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
            {dataOrder?.length && (
                <Chart
                    data={dataOrder}
                    title="Phân tích doanh số đơn hàng"
                    grid
                    dataKey="totalPrice"
                />
            )}
            <div className="homeWidgets">
                <WidgetLg />
            </div>
        </div>
    );
}
