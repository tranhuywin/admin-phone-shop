import "./newUser.css";

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">Tạo người dùng mới</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Họ</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className="newUserItem">
                    <label>Tên</label>
                    <input type="text" placeholder="Smith" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="johnsmith@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>Số điện thoại</label>
                    <input type="text" placeholder="+84 123 456 789" />
                </div>
                <div className="newUserItem">
                    <label>Địa chỉ</label>
                    <input type="text" placeholder="Thủ Đức, Hồ Chí Minh" />
                </div>
                <div className="newUserItem">
                    <label>Giới tính</label>
                    <div className="newUserGender">
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                        />
                        <label for="male">Nam</label>
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                        />
                        <label for="female">Nữ</label>
                        <input
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                        />
                        <label for="other">Khác</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Loại tài khoản</label>
                    <select className="newUserSelect" name="role" id="active">
                        <option value="user">user</option>
                        <option value="sub-admin">sub-admin</option>
                        <option value="admin">admin</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    );
}
