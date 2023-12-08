
import React, { useState } from "react";
//import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { SharedProvider } from "./SharedContext";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <SharedProvider>
        {currentForm === "login" && <Login onFormSwitch={toggleForm} />}
        {currentForm === "register" && <Register onFormSwitch={toggleForm} />}
      </SharedProvider>
    </div>
  );
}

export default App;
