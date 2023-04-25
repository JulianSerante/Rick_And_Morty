import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

import style from "./Nav.module.css";

const Nav = ({onSearch, setAccess}) => {


    const handleLogOut = () => {
        setAccess(false);
    }

    return (
        <nav className = {style.containerNav}>

            <div>
            <SearchBar onSearch = {onSearch} />
            <NavLink to = '/home' className={style.navLink}>
                <button className = {style.boton}>
                    <h3 className = {style.home}>Home</h3>
                </button>
            </NavLink>

            <NavLink to = "/about" className={style.navLink}>
                <button className = {style.boton}>
                    <h3 className = {style.about} >About</h3>
                </button>
            </NavLink>
            
            <NavLink to = "/favorites" className={style.navLink}>
                <button className = {style.boton}>
                    <h3 className = {style.about} >Favorites</h3>
                </button>
            </NavLink>

            <button onClick={handleLogOut} className = {style.boton}>
                <h3 className = {style.logOut} >Log Out</h3>
            </button>
            </div>

            <NavLink to = '/home' >
                <img className={style.img} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19643055883023.5996f8afa3a8f.gif" alt="" />
            </NavLink>

        </nav>
    )
}



export default Nav;