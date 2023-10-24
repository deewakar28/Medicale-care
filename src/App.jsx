import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingUpForm from './components/SingUpForm';
import Home from './pages/Home';
import SignInForm from './components/SignInForm';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact="true" path="/" element={<Home/>}/>
    <Route exact="true" path="/SignUp" element={<SingUpForm/>}/>
    <Route exact="true" path="/SignIn" element={<SignInForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
