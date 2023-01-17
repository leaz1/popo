import '../stylesheets/NavBar.scss';
import {Link, NavLink} from "react-router-dom";

// @ts-ignore
export function NavBarItem({link, linkText}) {
    return(
        <li className="nav-bar-item">
            <NavLink to={link} className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
                <span>{linkText}</span>
            </NavLink>
        </li>
    )
}
