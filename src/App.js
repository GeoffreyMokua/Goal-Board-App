import React, { useEffect, useState } from 'react';
import {  Route, Routes } from "react-router-dom";


import NavBar from './Components/Navbar';
import Form from './Components/Form';
import Goals from './Components/Goals';
import Accomplishments from './Components/Accomplishments';
import Home from './Components/Home';

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


  const onUpdateGoal = (updatedGoal) => {
    const updatedGoals = goals.map(originalGoal => {
      if(originalGoal.id === updatedGoal.id){
        return updatedGoal;
      } else{
        return originalGoal;
      }
    });
    console.log(updatedGoals);
  }

  const onFormSubmit = (newData, type) => {
      type === 'goals' ? setGoals(goals => [...goals, newData]) : setAccomplishments(accomplishments => [...accomplishments, newData])
  }

  const onDeleteClick = (id, type) => {
    fetch(`http://localhost:3000/${type}/${id}`, {
      method: 'DELETE'
    })
    
    //Use filter to setGoal or setAccomplishments with new items
      if(type === 'goals'){
        setGoals(ogGoals => ogGoals.filter(ogGoal => {
          return ogGoal.id === id ? null : ogGoal;
        }))
      } else{
        setAccomplishments(ogAccomplishments => ogAccomplishments.filter(ogAccomplishment => {
          return ogAccomplishment.id === id ? null : ogAccomplishment;
        }))
      }
  }
  return ( 
      <div>
      <NavBar />
      <Form onFormSubmit={onFormSubmit}/>
      <Routes>
      <Route exact path="/" element={<Home />}>
          
        </Route>
        <Route path="/goals" element={<Goals goals={goals} onUpdateGoal={onUpdateGoal} onDeleteClick={onDeleteClick}/>}>
          
        </Route>
        <Route path="/accomplishments" element={<Accomplishments accomplishments={accomplishments} onDeleteClick={onDeleteClick}/>}>
          
        </Route>
        </Routes>
      
    </div>
    
  );
}

export default App;
