import React, { Component } from 'react';
import '../sass/styles.scss';

import JobCard from './JobCard';

import collabLogo from '../img/collab.png';
import htmlLogo from '../img/logos-technos/html.png';
import reactLogo from '../img/logos-technos/reactjs.png';
import bootstrapLogo from '../img/logos-technos/bootstrap.png';
import sassLogo from '../img/logos-technos/sass.png';
import mailLogo from '../img/logos-general/mail.png';
import phoneLogo from '../img/logos-general/phone.png';
import linkedinLogo from '../img/logos-general/linkedin.png';
import cvLogo from '../img/logos-general/cv.png';
import cvDownload from '../img/CV_AVAGLIANO.pdf';


class Intro extends Component{
  render(){
    return(
      <div className="d-flex flex-column">
      {/*LANDING SECTION*/}
        <div id='landing' className="d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-row justify-content-center align-items-center">
          <div className="landing-logo-container col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-row justify-content-end">
            <img src={collabLogo} alt="Enzo Avagiano and Ynov Campus" className="landing-logo"/>
            <div className="landing-separator ml-5"></div>
          </div>
          <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 d-flex flex-row justify-content-start">
            <div className="d-flex flex-column col-12 justify-content-center pt-2">
              <h1>Blog Ynov 2020</h1>
              <p>Scrollez pour commencer</p>
            </div>
          </div>
        </div>

      {/*INTRO DES STAGES x EXPLICATION CONTEXTE*/}
        <div id="stages" className="d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-row">
          <div style={{height:"90vh"}} className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 p-5 p-lg-4 d-flex flex-column justify-content-around">
            <div className="mb-5">
              <h2>Stage de validation ?</h2>
              <hr style={{backgroundColor:"#9146FF"}}/>
              <p className="card-text">A la fin de chaque année d'études chez Ynov, il nous est demandé d'effectuer un stage en milieu professionel. Ce dernier abouti à une note de laquelle dépend la validité de notre année effectuée.</p>
            </div>

            <div className="mb-5">
              <h2>Choix de l'entreprise ?</h2>
              <hr style={{backgroundColor:"#9146FF"}}/>
              <p className="card-text">Pour la première année, le domaine d'expertise de l'entreprise importe peu, en revanche, à partir de la seconde année, il nous faut exercer dans un domaine en rapport avec notre formation et nos compétences.</p>
            </div>

            <div className="mb-5">
              <h2>Mes stages ?</h2>
              <hr style={{backgroundColor:"#9146FF"}}/>
              <p className="card-text">Ce blog est un reccueil de mes différentes expériences de stage durant mon parcours chez Ynov, mais il servent aussi à vous montrer mes compétences et ce dont je suis capable en milieu prfessionel. Vous pouvez accéder aux différents articles de stages ci-après.</p>
            </div>
          </div>
          <div style={{height:"90vh"}} className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 p-5 p-lg-4 d-flex flex-wrap justify-content-center align-items-center">
            <JobCard company="montopoto" year="2019" small="Archive bientôt disponible"/>
            <JobCard company="blinxon" year="2020" small="Stage bénévole en association"/>
          </div>
        </div>
      {/*MON PROFIL x ME CONTACTER x CV*/}
        <div id="profil" className="d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-row">
          <div className="col-12 col-lg-4 p-2">
            <h3>À mon sujet :</h3>
            <hr/>
            <div className="d-flex flex-column justify-content-center">
              <p className="card-text">Je m'appelle Enzo Avagliano, je suis en seconde année de bachelor informatique sur le campus Ynov Aix-en-Provence.</p>
              <p>Je code depuis près de 4 ans maintenant. J'ai découvert l'univers du développement grâce aux jeux vidéos et notamment "Minecraft", jeu sur lequel je développais mes propres plugins en Java.</p>
              <p>Maintenant le développement est une passion et je souhaite me spécialiser en tant que développeur web Front-end.</p>
            </div>
          </div>
          <div className="col-12 col-lg-4 p-2">
            <h3>Mes compétences : </h3>
            <hr/>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p>Depuis mon entrée à Ynov, certaines technologies m'ont beacoup inspiré et certaines autres sont devenues mes outils du quotidien. Voilà un apperçu de ce que j'utilise pour travailler chaque jour :</p>
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                <p className="m-3"><img style={{maxWidth:"30px",marginRight:"5px"}} src={htmlLogo} alt="HTML 5 Logo"/>HTML 5</p>
                <p className="m-3"><img style={{maxWidth:"30px",marginRight:"5px"}} src={reactLogo} alt="ReactJS Logo"/>ReactJS</p>
                <p className="m-3"><img style={{maxWidth:"30px",marginRight:"5px"}} src={bootstrapLogo} alt="Boostrap Logo"/>Bootstrap</p>
                <p className="m-3"><img style={{maxWidth:"30px",marginRight:"5px"}} src={sassLogo} alt="Sass Logo"/>Sass</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 p-2">
            <h3>Mes informations :</h3>
            <hr/>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p>Voici quelques informations et liens utiles pour me contacter :</p>
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                <p className="m-3"><a style={{color:"black",textDecoration:"none"}} href="mailto:enzo.avagliano@ynov.com"><img style={{maxWidth:"30px",marginRight:"5px"}} src={mailLogo} alt="Mail logo"/>enzo.avagliano@ynov.com</a></p>
                <p className="m-3"><a style={{color:"black",textDecoration:"none"}} href="#profil"><img style={{maxWidth:"30px",marginRight:"5px"}} src={phoneLogo} alt="Telephone logo"/>06.69.07.42.59</a></p>
                <p className="m-3"><a style={{color:"black",textDecoration:"none"}} download href={cvDownload}><img style={{maxWidth:"30px",marginRight:"5px"}} src={cvLogo} alt="CV Logo"/>Mon CV (PDF)</a></p>
                <p className="m-3"><a style={{color:"black",textDecoration:"none"}} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/enzo-avagliano/"><img style={{maxWidth:"30px",marginRight:"5px"}} src={linkedinLogo} alt="Linkedin Logo"/>Linkedin</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;
