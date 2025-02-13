import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div className="flex justify-center bg-blue-500 p-1 text-white text-lg space-x-6">
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='/leaderboard'>Leaderboard</Link>
            <span> | </span>
            {user ? (
                <p onClick={logoutUser}>logout</p>
            ): (
                <div>
                    <Link to='/login'>Login</Link>
                    <span> | </span>
                    <Link to='/register'>Register</Link>
                </div>
            )}
            
            <span>|</span>
            {user && <p>Welcome {user.username}</p>}
        </div>
    )
}

export default Header;