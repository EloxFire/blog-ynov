import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Content from './components/Content';
import StageBlinxon from './components/stages/StageBlinxon';

function App() {
  return(
    <Router>
      <div>
        {/*Alaways on top*/}
        <Navbar leftTitles={["Accueil", "Mon profil", "Mes stages", "Contact"]} rightTitles={["Mon site"]}/>

        {/*In routes*/}
        <Switch>
          <Route path="/" exact component={props =>
            <div className="d-flex flex-column">
              <Content/>
            </div>
          }/>

          <Route path="/accueil" component={props =>
            <div className="d-flex flex-column">
              <Content/>
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
