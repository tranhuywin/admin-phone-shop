import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FeaturedInfo() {
  const [dataOrder, setDataOrder] = useState();
  const curentMonth = (new Date()).getMonth() + 1;
  const orderCurentMonth = dataOrder?.filter((item) => item.month === curentMonth)[0];
  const orderPreviousMonth = dataOrder?.filter((item) => item.month === curentMonth - 1)[0];
  const revanue = orderCurentMonth?.totalPrice - orderCurentMonth?.totalOriginalPrice;
  const revanuePrevious = orderPreviousMonth?.totalPrice - orderPreviousMonth?.totalOriginalPrice;
  useEffect(() => {
      axios
          .get("https://twin-shop.herokuapp.com/order/analytics/2021")
          .then((res) => {
              setDataOrder(res.data);
          });
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Lợi nhuận</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{revanue} VND</span>
          <span className="featuredMoneyRate">
            {revanue - revanuePrevious} VND <ArrowUpward  className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">So sánh với tháng trước</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Bán được</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{orderCurentMonth?.totalPrice} VND</span>
          <span className="featuredMoneyRate">
          {orderCurentMonth?.totalPrice - orderPreviousMonth?.totalPrice} VND <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">So sánh với tháng trước</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Giá gốc</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{orderCurentMonth?.totalOriginalPrice} VND</span>
          <span className="featuredMoneyRate">
            {orderCurentMonth?.totalOriginalPrice - orderPreviousMonth?.totalOriginalPrice} VND<ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">So sánh với tháng trước</span>
      </div>
    </div>
  );
}
