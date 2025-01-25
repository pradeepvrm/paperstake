import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header';
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext';
import Game from './pages/Game'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Header/>
        <Routes>
          <Route element={<PrivateRoute><HomePage /></PrivateRoute>} path='/' exact />
          <Route element={<PrivateRoute><Game /></PrivateRoute>} path='/game' />
          <Route element={<LoginPage />} path='/login' />
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
