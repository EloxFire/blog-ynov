import React, { Component } from 'react';

import '../../../sass/styles.scss';
import navbar from '../../../img/images-articles/navbar/navbar.png';
import navbarMobile from '../../../img/images-articles/navbar/navbar-mobile.png';
import navbarMobileUnfolded from '../../../img/images-articles/navbar/navbar-mobile-unfolded.png';

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
                <li><a href="#navigation" className="blog-link">Navigation sur le site</a></li>
                <li className="mb-2" style={{listStyleType:"none"}}>
                  <ul>
                    <li><a href="#navigation" className="blog-link">Solution</a></li>
                  </ul>
                </li>

                <li className="mb-2"><a href="#detail" className="blog-link">Détail de la solution</a></li>

                <li className="mb-2"><a href="#react-router-dom" className="blog-link">react-router-dom</a></li>

                <li className="mb-2"><a href="#problemes" className="blog-link">Problèmes rencontrés</a></li>

                <li className="mb-2"><a href="#conclusion" className="blog-link">Conclusion</a></li>
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
            <h3>Article de création : Barre de navigation.</h3>
            <p>Une barre de navigation est obligatoire si nous concevons un site contenant plusieurs pages. Les utilisateur doivent pouvoir naviger aisément sur notre site. Cet article va vous detailler la conception de la barre de navigation pour le site de l'association Blinxon.</p>
            <hr/>
            <div className="col-12 text-center mb-5">
              <img style={{maxHeight:"20vh", maxWidth:"100%"}} src={navbar} alt="Barre de navigation sur ordinateur"/>
              <p>Aperçu de la barre de navigation finale sur ordinateur</p>

              <img style={{maxHeight:"20vh", maxWidth:"100%"}} src={navbarMobile} alt="Barre de navigation sur mobile"/>
              <p>Aperçu de la barre de navigation finale sur mobile et tablette (Enroulée)</p>

              <img style={{maxHeight:"20vh", maxWidth:"100%"}} src={navbarMobileUnfolded} alt="Barre de navigation sur mobile"/>
              <p>Aperçu de la barre de navigation finale sur mobile et tablette (Déroulée)</p>
            </div>

            {/*Premier bloc : Navigation*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="navigation">Navigation sur le site</h3>
              <p>Les membres de l'association souhaitaient une navigtion simple et qui permette à l'utilisateur d'accéder à tout leur contenu peut importe oû ils se trouvent sur la page ou sur le site.</p>
              <div className="p-4">
                <h5>Solution</h5>
                <p>La solution était donc toute trouvée : une barre de navigation classique mais toujours visible, collée en haut de l'ecran afin d-y avoir accès à tout instant.</p>
              </div>
            </div>

            {/*Second bloc : Choix du tyoe de barre de navigation*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="detail">Détail de la solution</h3>
              <p>Après avoir choisi d'utiliser une barre de navigation fixe, collée en haut de page, il me fallait déterminer quels liens et quel contenu mettre à l'intérieur fin de pouvoir les prioriser et savoir l'ordre des liens.</p>
              <p>Ce travail fût assez simple, le projet de participation au 4L Trophy, qu'ambitionne l'association Blinxon se divise très simplement en grandes partie. Ces dernères sont les suivantes :</p>
              <ul>
                <li>Présentation de l'equipage</li>
                <li>Qu'est ce que le 4l Trophy</li>
                <li>Qui est 'Enfants du désert' (L'association partenaire du raid)</li>
                <li>Comment aider l'équipage (en tant qu'entreprise ou particulier)</li>
                <li>Les réseaux sociaux de l'équipage</li>
              </ul>
              <p>Une fois ces différentes parties vues et validées par ma tutrice de stage, j'ai pu commencer mon développement. J'ai d'abbord commencé par chercher des mots clés, rapide et efficaces qui rentrent dans une barre de navigation et qui soient explicites sur le contenu que l'utilisateur verra.</p>
              <p>J'ai donc fini avec ces différents liens :</p>
              <ul>
                <li><strong>"Accueil"</strong> : Retour à la landing page du site.</li>
                <li><strong>"L'équipage"</strong> : Section de présentation de l'équipage</li>
                <li><strong>"Le Raid"</strong> : Section de présentation du 4L Trophy</li>
                <li><strong>"Enfants du désert"</strong> : Section de présentation de l'association partenaire</li>
                <li><strong>"Nous aider"</strong> : Section de présentation des moyens pour aider l'association dans leur aventure.</li>
                <li><strong>"Nos réseaux"</strong> : Section contenant tous les liens externes qui ramenent vers les différents réseaux sociaux de l'association.</li>
              </ul>
            </div>

            {/*Troisième bloc : react-router-dom*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="react-router-dom">react-router-dom</h3>
              <p>[Insérer texte]</p>
            </div>

            {/*Quatrième bloc : Problèmes rencontrés*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="problemes">Problèmes rencontrés</h3>
              <p>[Insérer texte]</p>
            </div>

            {/*Cinquième bloc : Conclusion*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="conclusion">Conclusion</h3>
              <p>[Insérer texte]</p>
            </div>


          </div>
        </div>
      </div>
    )
  }
}

export default NavbarArticle;
