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
        <div className="flex flex-row justify-between bg-slate-950 border-b border-gray-600 text-lg p-1">
            <h1 className="font-bold text-xl justify-start">PaperStake</h1>
            <div className="flex items-center space-x-6">
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
                <Link to='https://github.com/pradeepvrm/paperstake'>github</Link>
            </div>
            {user && <p className="text-right mx-10">Balance:{points} </p>}
        </div>
    )
}

export default Header;