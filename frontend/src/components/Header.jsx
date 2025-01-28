import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div>
            <Link to='/'>Home</Link>
            {user ? (
                <p onClick={logoutUser}>logout</p>
            ): (
                <div>
                    <Link to='/login'>Login</Link>
                    <span> | </span>
                    <Link to='/register'>Register</Link>
                </div>
            )}
            

            {user && <p>Welcome {user.username}</p>}
        </div>
    )
}

export default Header;