import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingUpForm from './components/SingUpForm';
import Home from './pages/Home';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact="true" path="/" element={<Home/>}/>
    <Route exact="true" path="/SignUp" element={<SingUpForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
