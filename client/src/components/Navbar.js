import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const uid = useContext(UidContext);

    

    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <NavLink exact to="/">
                        <div className="logo">
                            <img src="./img/icon/png" alt="icon" />
                            <h3>The Joke Vault</h3>
                        </div>
                    </NavLink>
                </div>
                {uid ? (
                    <ul>
                         <li></li>
                         <li className="welcome">
                             <NavLink exact to="/profile">
                                 <h5>Welcome 'dynamic value'</h5>
                             </NavLink>
                         </li>
                         Logo Logout
                    </ul>
                ) : (
                    <ul>
                        <li></li>
                        <li>
                            <NavLink exact to ="/profile">
                                <img src="./img/icons/login.svg" alt=""/>
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;