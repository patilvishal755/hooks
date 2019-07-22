import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Increment from './components/Increment';
import StudentDetails from './components/StudentDetails';

function App() {
  return (
    <Router>
      <div>

        <Route exact path="/" component={Increment} />
        <Route exact path="/student" component={StudentDetails} />
        
      </div>
    </Router>
  );
}


export default App;
