import React, { Component } from 'react';

import '../../../sass/styles.scss';
import logoBlinxon from '../../../img/logos-entreprises/blinxon.png';

class NavbarArticle extends Component{
  render(){
    return(
      <div id="stageblinxon" className="d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-column justif-content-center align-items-center">
        <div className="col-9 d-flex flex-row">
          <div className="d-none d-xs-none d-sm-none d-md-none d-lg-block col-3 p-5 table-content-container">
            <div className="sticky-top pt-5">
              <h4>Table des matières</h4>
              <hr/>
              <ul>
                <li className="mb-2"><a href="#charte-graphique" className="blog-link">C'est quoi ?</a></li>
                <li className="mb-2"><a href="#presentation" className="blog-link">Présentation de la charte graphique</a></li>
                <li className="mb-2"><a href="#choix" className="blog-link">Choix des couleurs</a></li>
              </ul>
              <hr/>
              <a href="/stageblinxon#articles">Retour aux articles</a>
              <hr/>
              <a href="/accueil">Retour à l'accueil</a>
              <hr/>
            </div>
          </div>

          {/*CONTENU DU RAPPORT DE STAGE*/}
          <div className="col-lg-9 col-12 p-5">
            <h3>Article : Charte Graphique du site Blinxon</h3>
            <p>Une charte graphique est un document contenant l'ensemble des reglès graphiques qui constituent l'identité graphique d'une organisation, d'une marque ou encore d'un projet. </p>
            <hr/>

            {/*Premier bloc : Présentation de la charte graphique*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="charte-graphique">Présentation de la charte graphique</h3>
              <p>L'association Blinxon possédait déjà une certaine charte graphique et des éléménts caractériqtiques de son identité.</p>

              <div className="p-4">
                <h5>Police d'écriture :</h5>
                <p>Le site de Blinxon utilise deux polices d'écriture :</p>
                <div className="d-flex flex-row">
                  <h3 className="montserrat">Montserrat Regular, 400</h3>
                  <p className="ml-3">pour les textes.</p>
                </div>
                <div className="d-flex flex-row">
                  <h3 className="ubuntu">Ubuntu Regular, 600</h3>
                  <p className="ml-3">pour les sous-titres.</p>
                </div>
                <div className="d-flex flex-row">
                  <h3 className="osaka">Osaka Chips Regular, 400</h3>
                  <p className="ml-3">pour les titres.</p>
                </div>

                <h5 className="mt-5">Couleurs :</h5>
                <p>Voici les couleurs utilisées sur le site de Blinxon</p>
                <div className="d-flex flex-column">
                  <h6>Rouge Blinxon :</h6>
                  <p style={{backgroundColor:"#e64c3c",color:"#fff"}}>#E64C3C</p>
                </div>
                <div className="d-flex flex-column">
                  <h6>Beige Blinxon :</h6>
                  <p style={{backgroundColor:"#fff9b1",color:"#000"}}>#FFF9B1</p>
                </div>
                <div className="d-flex flex-column">
                  <h6>Blanc Blinxon:</h6>
                  <p style={{backgroundColor:"#FCFCFC",color:"#000"}}>#FCFCFC</p>
                </div>
              </div>
            </div>

            {/*Second bloc : Choix des couleurs*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="charte-graphique">Choix des couleurs</h3>
              <p>Les couleurs de l'identité graphique de l'association ont été définies comme tel lors de la création du logo de l'association, au moment de son enregistrement auprès de la préfecture. Les deux couleurs principales, à savoir le rouge et le beige sont assez contrastées entre elles, tout en gardant un aspect doux et chaleureux.</p>
              <p>Le rouge provient de la couleur du ciel au moment du coucher de soleil que l'on peut retrouver sur le logo de l'association.</p>
              <p>Le beige quand à lui, fait référence au sable du désert.</p>
              <div className="col-12 text-center">
                <img style={{maxHeight:"20vh"}} src={logoBlinxon} alt="Logo Blinxon"/>
                <p className="text-center">Logo de l'association Blinxon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavbarArticle;
