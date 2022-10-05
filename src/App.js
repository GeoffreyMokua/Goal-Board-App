import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Goals from "./components/Goals";
import Accomplishments from "./components/Accomplishments";
import Home from "./components/Home";
import Form from "./components/Form";


function App() {
  const [goals, setGoals] = useState([]);
  const [accomplishments, setAccomplishments] = useState([]);


   useEffect(() => {
    fetch(`http://localhost:3000/goals`)
      .then(res => res.json())
      .then(setGoals);
   }, []);
  
  useEffect(() => {
    fetch(`http://localhost:3000/accomplishments`)
      .then(res => res.json())
      .then(setAccomplishments);
  }, []);
  return (
    <div>
      <h1>hello world problem</h1>
    </div>
  );
}

export default App;
