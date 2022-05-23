import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './components/Auth/RequireAuth';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Purchase from './pages/Purchase/Purchase';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/purchase/:productId' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
