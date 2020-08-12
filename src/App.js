import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Stages from './components/Stages';

function App() {
  return(
    <Router>
      <div>
        {/*Alaways on top*/}
        <Navbar leftTitles={["Accueil", "Mon profil", "Mes stages", "Contact"]} rightTitles={["Mon site"]}/>

        {/*In routes*/}
        <Switch>
          <Route path="/" exact component={props =>
            <div>
              <Intro/>
              <Stages/>
            </div>
          }/>

          <Route path="/accueil" component={props =>
            <div>
              <Intro/>
              <Stages/>
            </div>
          }/>

          <Route path='/contact' component={() => {
            window.location.href = 'https://enzoavagliano.fr/contact';
            return null;
          }}/>

          <Route path='/monsite' component={() => {
            window.location.href = 'https://enzoavagliano.fr';
            return null;
          }}/>
        </Switch>

        {/*Alaways on bottom*/}
      </div>
    </Router>
  )
}

export default App;
