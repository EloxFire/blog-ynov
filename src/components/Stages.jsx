import React, { Component } from 'react'

import JobCard from './JobCard';
import '../sass/styles.scss';

class Stages extends Component{
  render(){
    return(
      <div id="stage" className="d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-row">
        <div className="b-dark col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 p-5 d-flex flex-column justify-content-around">
          {/*Explication de pourquoi les stages*/}
          <div className="mb-5">
            <h2>Stage de fin d'année ?</h2>
            <hr style={{backgroundColor:"#9146FF"}}/>
            <p className="card-text">A la fin de chaque année d'études chez Ynov, il nous est demandé d'effectuer un stage en milieu professionnel. Ce dernier abouti à une note de laquelle dépend la validitée de notre année effectuée.</p>
          </div>
          <div className="mb-5">
            <h2>Choix de l'entreprise</h2>
            <hr style={{backgroundColor:"#9146FF"}}/>
            <p className="card-text">Lors de la première année d'études, le domaine d'exercice de l'entreprise n'as pas d'importance. En revanche à partir de la seconde année, nous devons effectuer notre stage dans une entreprise se situant dans notre domaine de formation (l'informatique dans mon cas).</p>
          </div>
          <div className="mb-5">
            <h2>Mes stages</h2>
            <hr style={{backgroundColor:"#9146FF"}}/>
            <p className="card-text">Ce blog est un reccueil de mes différentes expériences de stage durant mon parcours chez Ynov, mais il servent aussi à vous montrer mes compétences et ce que je suis capable de faire en milieu prfessionnel. Vous pouvez acceder aux différents articles de stages ci-contre.</p>
          </div>
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 p-5 d-flex flex-column justify-content-around">
          <div className="" style={{height:"100vh",overflow:"auto"}}>
            <JobCard year="2019" company="montopoto" small="Archive bientôt disponible"/>
            <JobCard year="2020" company="blinxon" small="Stage en association pour la conception d'un site Web"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Stages;
