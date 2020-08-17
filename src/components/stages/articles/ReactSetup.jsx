import React, { Component } from 'react';

import '../../../sass/styles.scss';
import reactLogo from '../../../img/logos-technos/reactjsBlue.png';

class ReactSetup extends Component{
  render(){
    return(
      <div id="reactsetup" className="d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-column justif-content-center align-items-center">
        <div className="col-9 d-flex flex-row">
          <div className="d-none d-xs-none d-sm-none d-md-none d-lg-block col-3 p-5 table-content-container">
            <div className="sticky-top pt-5">
              <h4>Table des matières</h4>
              <hr/>
              <ul>
                <li><a href="" className="blog-link">React c'est quoi ?</a></li>
                <li className="mb-2" style={{listStyleType:"none"}}>
                  <ul>
                    <li><a href="#but" className="blog-link">But</a></li>
                    <li><a href="#besoins" className="blog-link">Besoins</a></li>
                  </ul>
                </li>

                <li><a href="" className="blog-link">La misison</a></li>
                <li className="mb-2" style={{listStyleType:"none"}}>
                  <ul>
                    <li><a href="" className="blog-link">Modalités</a></li>
                  </ul>
                </li>

                <li className="mb-2"><a href="#problemes" className="blog-link">Les problèmes</a></li>

                <li><a href="" className="blog-link">Conclusion</a></li>
                <li className="mb-2" style={{listStyleType:"none"}}>
                  <ul>
                    <li><a href="" className="blog-link">Mon retour</a></li>
                    <li><a href="" className="blog-link">Améliorations</a></li>
                  </ul>
                </li>
              </ul>
              <hr/>
              <a href="#articles">Retour à l'accueil</a>
              <hr/>
              <p>Derniers articles :</p>
              <ul>
                <li><a href="">Installation de ReactJS</a></li>
                <li><a href="">Barre de navigation</a></li>
              </ul>
              <hr/>
            </div>
          </div>

          {/*CONTENU DU RAPPORT DE STAGE*/}
          <div className="col-lg-9 col-12 p-5">
            <h3>Stage bénévole en association - Blinxon</h3>
            <p>Blinxon est une association qui à pour but de participer au mytique raid humanitaire '4L Trophy' en février 2021.</p>
            <hr/>
            <div className="col-12 text-center mb-5">
              <img style={{maxHeight:"20vh"}} src={reactLogo} alt="Logo de l'associaiton Blinxon"/>
              <p>Logo de ReactJS</p>
            </div>

            {/*Premier bloc*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="but">L'association</h3>
              <p>Blinxon à été fondée le 15 mars 2020 avec un but en tête : participer au <u><a style={{textDecoration:"none",color:"black"}} target="_blank" href="https://www.4ltrophy.com">4L Trophy 2021</a>.</u></p>
              <p>C'est un défi un peu foub, mais qui en vaut la peine ! Un raid humanitaire réservé au jeunes de 18 à 28 ans, partant de Biarritz dans les Pyrénés Atlantiques et avec pour destination Marrakech au Marroc !</p>
              <p>Afin de réaliser ce projet, l'association composée de deux membres : Enzo Avagliano (Président) et Olivia Masson (Trésorière), doit réunir un budget assez conséquent, près de 9000€, afin de couvrir tous les frais nécéssaires, dont l'inscription au raid.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReactSetup;
