import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_BACKEND_URL;

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${apiUrl}/api/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email }),
        });

        if (response.status === 201) {
            navigate('/login');
        } else {
            alert('Registration failed');
        }
    };

    return (
        <div className='flex h-screen w-full text-white'>
            <div className="hidden w-1/2 flex-col items-center justify-center border-r border-gray-800 md:flex">
                <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold tracking-wider">PAPERSTAKE</h1>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center md:w-1/2'>
            <h1 className='text-4xl font-bold text-center'>Register</h1>
            <p className='text-sm text-gray-400 my-2'>Create an account to get started</p>
                <form className='flex flex-col m-2 text-xl w-sm' onSubmit={handleSubmit}>
                    <input
                        className='border border-gray-700 text-center p-1 my-1'
                        type="text"
                        name="username"
                        placeholder="Username*"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className='border border-gray-700 text-center p-1 my-1'
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className=' border border-gray-700 text-center p-1 my-1'
                        type="password"
                        name="password"
                        placeholder="Password*"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input 
                        className='bg-purple-600 hover:bg-gray-700 rounded-sm mt-4 p-1'
                        type="submit" 
                        value="Register" />
                </form>
                <p className='text-sm text-gray-400'>Already have an account? <a className='text-white hover:text-purple-400' href='/login'>Login</a></p>
            </div>
        </div>
    );
};

export default RegisterPage;