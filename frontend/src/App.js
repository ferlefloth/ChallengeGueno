import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar'
import IngresoForm from './components/IngresoForm'
function App(props) {

  const [datos, setDatos] = useState(null)
  const [cuit, setCuit] =useState(null)
  
  
  return (
    <>
    <NavigationBar />

    <IngresoForm setDatos={setDatos} setCuit={setCuit}/>

    
    </>
  );
}

export default App;
