import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'WordConverter-Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = 'WordConverter-light Mode'
    }
  }
  const greenMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'green';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'WordConverter-Green Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = 'WordConverter-light Mode'
    }
  }
  const redMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'red';
      showAlert("Red mode has been enabled", "success");
      document.title = 'WordConverter-red Mode'

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = 'WordConverter-light Mode'
    }
  }
  const blueMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'darkblue';
      showAlert("Blue mode has been enabled", "success");
      document.title = 'WordConverter-blue Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = 'WordConverter-light Mode'
    }
  }


  return (
    <>
  

      <Navbar title="WordConverter" mode={mode} toggleMode={toggleMode} redMode={redMode} blueMode={blueMode} greenMode={greenMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Textform heading='Enter the text which needs to be converted:-- ' mode={mode} />
       
   

      </div>

    </>
  );
}

export default App;
