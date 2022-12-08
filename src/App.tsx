import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import GameIntro from './features/Pages/gameIntro';
import GamePlay from './features/Pages/gamePlayPage';
import Celebrate from './features/Pages/clelebratePage';
import GameType from './features/Pages/GameType';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<GameIntro/>}>

            </Route>
            <Route path='/gamePlay/:Type' element={<GamePlay/>}>

            </Route>
            <Route path='/gamePlay/:Winner/celebrate' element={<Celebrate/>}>

            </Route>
            <Route path='/type' element={<GameType/>}>

            </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
