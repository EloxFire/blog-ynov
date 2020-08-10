import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Intro from './components/Intro';

function App() {
  return(
    <Router>
      <div>
        {/*Alaways on top*/}
        <Navbar leftTitles={["Mes stages", "Mon profil", "Contact"]} rightTitles={["Mon site"]}/>

        {/*In routes*/}
        <Switch>
          <Route path="/" exact component={props =>
            <div>
              <Intro/>
            </div>
          }/>

          <Route path="/home" component={props =>
            <div>
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
