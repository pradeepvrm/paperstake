import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';


const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div>
            <form onSubmit={loginUser}>
                <input type='text' name='username' placeholder='enter username'></input>
                <input type='password' name='password' placeholder='enter password'></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default LoginPage; 