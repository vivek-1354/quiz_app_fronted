import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Login, Signup } from './components/pages/index';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/signup' element={<Signup />} />
    </Routes>
  );
}

export default App;
