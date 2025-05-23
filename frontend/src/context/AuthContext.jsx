
import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"

const apiUrl = import.meta.env.VITE_BACKEND_URL
const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
 
    let[authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)

    const navigate = useNavigate()
    
    let loginUser = async (e ) => {
        e.preventDefault()

        let response = await fetch(`${apiUrl}/api/token/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:e.target.username.value,
                password:e.target.password.value
            })            
            })
            let data = await response.json()

            if (response.status === 200) {
                setUser(jwtDecode(data.access))
                setAuthTokens(data)
                localStorage.setItem('authTokens', JSON.stringify(data))
                navigate('/home')
            }else{
                alert('something went wrong!!')
            }
    }

    let logoutUser = () => {
        setUser(null)
        setAuthTokens(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }

    let updateToken = async () => {
        let response = await fetch(`${apiUrl}/api/token/refresh/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                refresh:authTokens?.refresh
            })            
            })
            let data = await response.json()

            if (response.status === 200) {
                setUser(jwtDecode(data.access))
                setAuthTokens(data)
                localStorage.setItem('authTokens', JSON.stringify(data))
            }else{
                logoutUser()
            }
    
    }

    let updatePoints = async (points) => {
        let response = await fetch(`${apiUrl}/api/manage-points/`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`,
          },
          body: JSON.stringify({ points }),
        });
        let data = await response.json();
    
        if (response.status === 200) {
          setUser((prevUser) => ({ ...prevUser, points: data.points }));
        } else {
          alert("Failed to update points");
        }
      }
    
    let getPoints = async () => {
        let response = await fetch(`${apiUrl}/api/manage-points/`, {
            method: "GET",
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
          },
        })
        let data = await response.json()
        return data
    }
        

    let contextData = {
        user:user,
        getPoints:getPoints,
        loginUser:loginUser,
        logoutUser:logoutUser,
        updatePoints:updatePoints,
    }

    useEffect(() => {
        let interval =setInterval(() => {
            if(authTokens) {
                updateToken()
            }
        }, 270000) // 4.5 minutes
        return () => clearInterval(interval)
    }, [authTokens, loading])
    
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}