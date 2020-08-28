import React, { Component } from 'react';

import '../../../sass/styles.scss';
import timerOrdi from '../../../img/images-articles/countdown/timerOrdiScreen.png';
import timerMobile from '../../../img/images-articles/countdown/timerMobileScreen.png';
import timerHome from '../../../img/images-articles/countdown/timerHomeScreen.png';
import countdownCode from '../../../img/images-articles/countdown/countdownCode.png';
import fullCountdownCode from '../../../img/images-articles/countdown/fullCountdownCode.png';
import countdownCodeUse from '../../../img/images-articles/countdown/countdownCodeUse.png';

class Countdown extends Component{
  render(){
    return(
      <div id="stageblinxon" className="d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-column justif-content-center align-items-center">
        <div className="col-9 d-flex flex-row">
          <div className="d-none d-xs-none d-sm-none d-md-none d-lg-block col-3 p-5 table-content-container">
            <div className="sticky-top pt-5">
              <h4>Table des matières</h4>
              <hr/>
              <ul>
                <li className="mb-2"><a href="#presentation" className="a-quoi-il-sert">Il sert à quoi ?</a></li>
                <li className="mb-2"><a href="#choix" className="comment-est-il-fait">Comment est-il fait ?</a></li>
                <li className="mb-2"><a href="#choix" className="utilisation">Comment je l'utilise</a></li>
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
            <h3>Article : Compte à rebours du site Blinxon</h3>
            <p>Sur le site de Blinxon, le compte à rebours est un élément apoprtant du dynamisme au site et permet de mieux visualiser la date de réalisation du projet.</p>
            <hr/>

            {/*Premier bloc : A quoi ca sert ?*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="a-quoi-il-sert">À quoi sert ce compte à rebours</h3>
              <p>Le compte à rebours présent sur le site de l'association Blinxon décompte les jours jusqu'à la date du départ du raid <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="https://4ltrophy.com">4L Trophy</a></span>.</p>
              <p>Vous pouvez l'appercevoir à tout moment dans la <span className="overlined"><a style={{color:"black"}} href="/article/barre-de-navigation">barre de navigation</a></span> du site sur ordinateur et téléviseur, tout comme dans le menu caché sur mobile et tablette. Vous pouvez aussi le voir sur la section d'accueil du site :</p>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img style={{maxWidth:"100%"}} src={timerOrdi} alt="Compte à rebours sur ordinateur"/>
                <p className="mb-3">Compte à rebours sur ordinateur</p>
                <img style={{maxWidth:"30%"}} src={timerMobile} alt="Compte à rebours sur Mobile"/>
                <p className="mb-3">Compte à rebours sur mobile</p>
              </div>
            </div>

            {/*Second bloc : Comment est il fait ?*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="comment-est-il-fait">Comment est-il fait ?</h3>
              <p>Le compte à rebours utilise le packet NPM <span className="overlined"><a style={{color:"black"}} href="https://www.npmjs.com/package/react-countdown-now" target="_blank" rel="noopener noreferrer">react-countdown-now</a></span> qui permet de faire des comptes à rebours tout simplement :</p>
              <img style={{maxWidth:"100%"}} src={countdownCode} alt="Exemple de compte à rebours"/>
              <p className="mt-3">Voici le code de mon compte à rebours :</p>
              <img style={{maxWidth:"100%"}} src={fullCountdownCode} alt="Mon compte à rebours"/>
              <p className="mt-3">Grâce au code ci-dessus, mon timer est personnalisable. Je peux donc en changer la taille de la police d'écriture ainsi que la couleur générale du compte à rebours grâce aux parametres 'color' et 'font'.</p>
            </div>

            {/*Troisième bloc : Comment je l'utilise ?*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="comment-est-il-fait">Comment je l'utilise ?</h3>
              <p>L'utilisation de ce compte à rebours personnalisable est toute simple : </p>
              <img style={{maxWidth:"100%"}} src={countdownCodeUse} alt="Code d'utilisation de mon compte à rebours"/>
              <p className="mt-3">Il me suffit juste de spécifier une taille de police d'écriture et une couleur pour mon timer. Celui-ci apparait ensuite tel quel sur ma page.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Countdown;
