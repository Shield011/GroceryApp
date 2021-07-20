import React, {useState} from 'react'
import './App.css';
import LoginSignUpbuttons from './Components/LoginSignUpbuttons';


function App() {
  const[show, setShow] = useState();

  const toggle = () => {
    setShow(!show)

  }


  return (
    <div className="App">
      <LoginSignUpbuttons toggle ={toggle} show ={show} setshow = {setShow}/>
    
    </div>
  );
}

export default App;
