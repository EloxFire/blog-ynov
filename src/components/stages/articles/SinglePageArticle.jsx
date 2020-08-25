import React, { Component } from 'react';
import '../../../sass/styles.scss';

import singlePageWebsiteExemple from '../../../img/images-articles/single-page/single-page-website-exemple.png';
import blinxonLongPageDesktop from '../../../img/images-articles/single-page/long-screen-blinxon.png';
import blinxonLongPageMobile from '../../../img/images-articles/single-page/long-screen-blinxon-mobile.png';

class SinglePageArticle extends Component{
  render(){
    return(
      <div id="reactsetup" className="d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-column justif-content-center align-items-center">
        <div className="col-9 d-flex flex-row">
          <div className="d-none d-xs-none d-sm-none d-md-none d-lg-block col-3 p-5 table-content-container">
            <div className="sticky-top pt-5">
              <h4>Table des matières</h4>
              <hr/>
              <ul>
                <li className="mb-2"><a href="#environement" className="blog-link">Single page, c'est quoi ?</a></li>
                <li className="mb-2"><a href="#environement-dev" className="blog-link">Single page & React</a></li>
                <li className="mb-2"><a href="#communication" className="blog-link">Navigation sur du single page ?</a></li>
                <li className="mb-2"><a href="#validation" className="blog-link">Inconvénients</a></li>
                <li className="mb-2"><a href="#articles" className="blog-link">Conclusion</a></li>
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
            <h3>Article : Site en single page ?</h3>
            <p>Nouvel article expliquant mon choix de produire un site en single page pour l'association Blinxon.</p>
            <hr/>
            <div className="col-12 text-center mb-5">
              <img className="mr-5" style={{maxHeight:"100vh"}} src={blinxonLongPageDesktop} alt="Exemple de site single page"/>
              <img className="ml-5" style={{maxHeight:"100vh"}} src={blinxonLongPageMobile} alt="Exemple de site single page"/>
              <p>Site de Blinxon sur une seule page (Captures d'écrans sur une version non finale du site)</p>
            </div>

            {/*Premier bloc : Environement de travail*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="environement">Article </h3>
            </div>

            {/*Second bloc : Single page & React
            <div className="margin-separator">
              <hr/>
              <h3 id="environement">Article toujours en écriture...</h3>
            </div>*/}

          </div>
        </div>
      </div>
    )
  }
}

export default SinglePageArticle;
