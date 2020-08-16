import React, { Component } from 'react';

class Profil extends Component{
  render(){
    return(
      <div id="monprofil" className="d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-row">
        <div className="b-dark col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 p-5 d-flex flex-column justify-content-around">
          {/*Explication de pourquoi les stages*/}
          <div className="mb-5">
            <h2>Mon profil :</h2>
            <hr style={{backgroundColor:"#9146FF"}}/>
            <p className="card-text">A la fin de chaque année d'études chez Ynov, il nous est demandé d'effectuer un stage en milieu professionnel. Ce dernier abouti à une note de laquelle dépend la validitée de notre année effectuée.</p>
          </div>
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 p-5 d-flex flex-column justify-content-around">
          <div className="" style={{height:"100vh",overflow:"auto"}}>
            test
          </div>
        </div>
      </div>
    )
  }
}

export default Profil;
