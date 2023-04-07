import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = ({onSearch}) => {
    return (
        <nav className = {style.containerNav}>
           
            <button className = {style.botonHome}>
                <NavLink to = '/home'>
                    <h3 className = {style.home}>Home</h3>
                </NavLink>
            </button>

            <button className = {style.botonAbout}>
                <NavLink to = "/about">
                    <h3 className = {style.about} >About</h3>
                </NavLink>
            </button>
            

            <SearchBar onSearch = {onSearch} />

        </nav>
    )
}

export default Nav;