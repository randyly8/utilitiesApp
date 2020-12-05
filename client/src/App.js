import React from 'react'

import Navbar from './components/Navbar'

import HomePage from './pages/HomePage'
import WeatherPage from './pages/WeatherPage'
import CalculatorPage from './pages/CalculatorPage'

import {
  BrowserRouter as Router,
  Route,
  Switch }
  from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/weather' component={WeatherPage} />
        <Route path='/calculator' component={CalculatorPage} />
      </Switch>
    </Router>
  );
}

export default App;
