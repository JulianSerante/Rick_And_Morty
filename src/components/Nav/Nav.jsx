import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = ({onSearch}) => {
    return (
        <nav className = {style.containerNav}>

            <button>
                <NavLink to = '/home'>
                    <h3>Home</h3>
                </NavLink>
            </button>

            <button>
                <NavLink to = "/about">
                    <h3>About</h3>
                </NavLink>
            </button>

            <SearchBar onSearch = {onSearch} />

        </nav>
    )
}

export default Nav;