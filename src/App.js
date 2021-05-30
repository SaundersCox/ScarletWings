import React, { useState, useEffect } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ConfettiGenerator from "confetti-js";

import uwu from './uwu.jpg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



const MyToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show News</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Update!</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Scarlet Wings Fursuits</h1>
        <Jumbotron>
          <div>
            <img src={uwu} className="App-logo rounded-circle border border-primary" alt="logo" />
          </div>

          <MyToast>
        <span className="text-secondary" role="img" aria-label="tada">
          🎉Scarlet now has a website!🎉 
          <br/>
          Features in progress~
        </span>
       
      </MyToast>
        </Jumbotron>
        
      </header>
    </div>
  );
}

function Confetti() {
  useEffect(() => {
  const confettiSettings = { target: 'root' };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
 
  return () => confetti.clear();
}, []) // add the var dependencies or not
}

export default App;
