import "./login.css";
import Cookies from 'js-cookie';
import axios from 'axios';

export default function login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const dataUser = {email: data.get("email"), password: data.get("password")};
        axios.post('https://twin-shop.herokuapp.com/auth/login', dataUser)
        .then((res) => {
            console.log(res);
            Cookies.set('access_token', res.data.access_token);
            window.location.href = '/';
        })
    };
    return (
        <>
            <form className="login__form" onSubmit={handleSubmit}>
                <div className="login__imgcontainer">
                    <img
                        src="https://www.w3schools.com/howto/img_avatar2.png"
                        alt="Avatar"
                        className="login__avatar"
                    />
                </div>
                <div className="login__container">
                    <label htmlFor="uname">
                        <b>Email</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        required
                        className="login__input"
                    />
                    <label htmlFor="psw">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        required
                    />
                    <button type="submit" className="login__button">Login</button>
                    <label>
                        <input
                            type="checkbox"
                            defaultChecked="checked"
                            name="remember"
                        />{" "}
                        Remember me
                    </label>
                </div>
                <div
                    className="login__container"
                    style={{ backgroundColor: "#f1f1f1" }}
                >
                    <button type="button" className="login__cancelbtn">
                        Cancel
                    </button>
                    <span className="login__psw">
                        Forgot <a href="#">password?</a>
                    </span>
                </div>
            </form>
        </>
    );
}
