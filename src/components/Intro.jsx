import React, { Component } from 'react';
import '../sass/styles.scss';

import Card from './Card.jsx';

class Intro extends Component{
  render(){
    return(
      <div id="intro" className="col-12 pt-5">
        <div className="col-12 text-center">
          <h1>Bienvenue sur mon blog 2020</h1>
          <p>Avant de commencer, voici quelques informations sur moi</p>
          <hr/>
        </div>
        <div>
          <div className="d-flex flex-xs-column flex-sm-column flex-md-column flex-lg-row mt-5">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-3 d-flex flex-row align-items-center justify-content-center p-2">
              <Card title="A propos de moi :" age="19" birth="9/11/2000" town="Saint Cannat (13)" text="Etudiant chez Ynov Campus en seconde année de bachelor informatique, le dévelopement web est plus qu'un passe-temps : c'est une passion. Et j'aimerais faire de cette dernière mon métier."/>
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-3 d-flex flex-row align-items-center justify-content-center p-2">
              <Card title="Mon parcours :" ynov xp="2" code xpCode="3.5"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;
