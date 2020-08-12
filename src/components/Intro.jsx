import React, { Component } from 'react';
import '../sass/styles.scss';

import Card from './Card.jsx';
import blinxonLogo from "../img/LOGO-BLINXON.png";
import montopotoLogo from '../img/logo-montopoto.png';
import collabLogo from '../img/collab.png';


class Intro extends Component{
  render(){
    return(
      <div className="headerContentBody col-12">
        <div className="headerContentContainer col-12 d-flex flex-row align-items-center justify-content-center">
          <div className="d-flex flex-row align-items-center">
            <img className="headerContentLogo" src={collabLogo} alt="Enzo Avagliano's logo"/>
            <div className="headerContentSeparator ml-3 mr-3"></div>
          </div>
          <div className="d-flex flex-column">
            <h1 className="headerContentTitle">Blog Ynov 2020</h1>
            <p className="headerContentSubtitle">Scrollez pour commencer</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;
