import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import OrderList from "./pages/orderList/OrderList";
import Color from "./pages/color/Color";
import Order from "./pages/order/Order";
import Login from "./pages/login";
import Cookies from 'js-cookie';
import axios from 'axios';

function App() {
  const isPageLogin = window.location.pathname === "/login";

  const isValidToken = () => {
    if (!isPageLogin) {
      const access_token = Cookies.get("access_token");
      if (access_token) {
        axios.get("https://twin-shop.herokuapp.com/user/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          }
        })
          .then(res => {
            if(res.statusCode === 401) {
              window.location.replace("/login");
            }
          })
          .catch(err => {
            window.location.href = '/login';
          });
      }
    }
  }
  isValidToken();
  return (
    <Router>
      {!isPageLogin && <Topbar />}
      <div className="container">
        {!isPageLogin && <Sidebar />}
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>

            <Route path="/orders">
              <OrderList />
            </Route>
            <Route path="/order/:ordersId">
              <Order />
            </Route>
            <Route path="/neworders">
              <NewProduct />

            </Route>
            <Route path="/color/:colorsId">
              <Color />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
