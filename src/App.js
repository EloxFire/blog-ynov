import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Content from './components/Content';
import StageBlinxon from './components/stages/StageBlinxon';
import ReactSetup from './components/stages/articles/ReactSetup';
import NavbarArticle from './components/stages/articles/NavbarArticle';
import CreationProcess from './components/stages/articles/CreationProcess';
import Footer from './components/Footer';

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

          <Route path='/messtages' component={() => {
            window.location.href = '/accueil#stages';
            return false;
          }}/>

          <Route path='/monprofil' component={() => {
            window.location.href = '/accueil#profil';
            return null;
          }}/>

          <Route path='/contact' component={() => {
            window.location.href = 'https://enzoavagliano.fr/contact';
            return null;
          }}/>

          <Route path='/monsite' component={() => {
            window.location.href = 'https://enzoavagliano.fr';
            return null;
          }}/>

          <Route path="/stageblinxon" component={props =>
            <div>
              <StageBlinxon/>
            </div>
          }/>

          <Route path="/article/react-setup" component={props =>
            <div>
              <ReactSetup/>
            </div>
          }/>

          <Route path="/article/barre-de-navigation" component={props =>
            <div>
              <NavbarArticle/>
            </div>
          }/>

          <Route path="/article/processus-de-creation" component={props =>
            <div>
              <CreationProcess/>
            </div>
          }/>
        </Switch>

        {/*Alaways on bottom*/}
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
