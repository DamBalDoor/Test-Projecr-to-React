import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MyButton from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../../context";

const Navbar = () => {
    const {setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
          <div className="navbar__links">
            <span className="navbar__link"><Link to="/about">О сайте</Link></span>
            <span className="navbar__link"><Link to="/posts">Наши посты</Link></span>
          </div>
        </div>
    );
};

export default Navbar;