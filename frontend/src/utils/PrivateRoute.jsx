import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  let {user} = useContext(AuthContext)
  // let auth = true; // Replace with authentication logic
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;