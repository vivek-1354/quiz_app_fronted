import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Login, Signup, Quiz, Result } from './components/pages';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/result' element={<Result />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/signup' element={<Signup />} />
    </Routes>
  );
}

export default App;
