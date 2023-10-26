import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingUpForm from './components/SingUpForm';
import Home from './pages/Home';
import SignInForm from './components/SignInForm';
import PatientsList from './pages/PatientsList';
import NewPatientForm from './components/newPatientForm';
import PatientReport from './pages/PatientReport';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact="true" path="/" element={<Home/>}/>
    <Route exact="true" path="/SignUp" element={<SingUpForm/>}/>
    <Route exact="true" path="/SignIn" element={<SignInForm/>}/>
    <Route exact="true" path="/PatientsList" element={<PatientsList/>}/>
    <Route exact="true" path="/NewPatientForm" element={<NewPatientForm/>}/>
    <Route exact="true" path="/PatientReport" element={<PatientReport/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
