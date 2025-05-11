import { useContext } from 'react';
import AuthContext from '../context/AuthContext';


const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div className='flex h-screen w-full bg-black text-white'>
            <div className="hidden w-1/2 flex-col items-center justify-center border-r border-gray-800 md:flex">
                <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold tracking-wider">PAPERSTAKE</h1>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center md:w-1/2'>
                <h1 className='text-4xl font-bold text-center'>Login</h1>
                <form className='flex flex-col m-2 text-xl' onSubmit={loginUser}>
                    <input className='border text-center p-1' type='text' name='username' placeholder='username'></input>
                    <input className='border text-center p-1' type='password' name='password' placeholder='password'></input>
                    <input className='bg-purple-600 hover:bg-gray-700 rounded-sm my-2 p-1' type='submit' value='Login'></input>
                </form>
                <p className='text-sm'>Don't have an account? <a className='hover:text-blue-400' href='/register'>Register</a></p>
            </div>
        </div>
    )
}

export default LoginPage; 