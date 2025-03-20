import { NavLink } from "react-router-dom";
import "../App.css";

function Navigation() {
    return (
        <>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink to="/">Landing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/launches/pages/1">Launches</NavLink>
                    </li>
                    <li>
                        <NavLink to="/payloads/pages/1">Payloads</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cores/pages/1">Cores</NavLink>
                    </li>
                    <li>
                        <NavLink to="/rockets/pages/1">Rockets</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;
