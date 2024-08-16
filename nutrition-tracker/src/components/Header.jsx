import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Header(){
    const loggedData=useContext(UserContext);
    const navigate= useNavigate();
    function logout()
    {
        localStorage.removeItem("nutrify-user");
        loggedData.setLoggedUser(null);
        navigate("/login")
    }

    return(
        <div className="header">
            <ul>
                <li className="header-items">
                    <ul>
                        <Link to={"/track"}><li className="nav-comp">Home</li></Link>
                        <Link to={"/Diet"}><li className="nav-comp">Diet</li></Link>
                    </ul>
                </li>
                <li onClick={logout} className="header-logout">
                    <li>Logout</li>
                </li>
            </ul>
        </div>
    )
}

                        