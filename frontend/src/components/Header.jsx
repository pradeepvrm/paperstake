import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
    const {user, logoutUser, getPoints} = useContext(AuthContext)
    const [points, setPoints] = useState(0)

    useEffect(() => {
    const fetchPoints = async () => {
        const data = await getPoints()
        setPoints(data.points)
    }
    fetchPoints()
    }, [getPoints])
    
    return (
        <div className="flex justify-center bg-zinc-950 p-1 text-white text-lg space-x-6">
            <Link to='/home'>Home</Link>
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
            {user && <p className="">Balance:{points} </p>}
        </div>
    )
}

export default Header;