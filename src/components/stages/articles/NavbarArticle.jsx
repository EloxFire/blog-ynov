import React, { Component } from 'react';

import '../../../sass/styles.scss';
import navbar from '../../../img/images-articles/navbar/navbar.png';
import navbarMobile from '../../../img/images-articles/navbar/navbar-mobile.png';
import navbarMobileUnfolded from '../../../img/images-articles/navbar/navbar-mobile-unfolded.png';
import reactRouterDomElements from '../../../img/images-articles/navbar/react-router-dom-elements.png';
import reactRouterDomRouteExemple from '../../../img/images-articles/navbar/react-router-dom-route-exemple.png';
import reactRouterDomRouteExempleWithComponent from '../../../img/images-articles/navbar/react-router-dom-route-exemple-with-component.png';
import reactRouterDomSwitchExemple from '../../../img/images-articles/navbar/react-router-dom-switch-exemple.png';
import navbarCode from '../../../img/images-articles/navbar/navbarcode.png';
import navbarUse from '../../../img/images-articles/navbar/navbaruse.png';
import timerIssueFont from '../../../img/images-articles/navbar/timer-font-props-issue.png';
import fluxNavigation from '../../../img/images-articles/navbar/fluxArrows.png';

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
                <li className="mb-2"><a href="#flux" className="blog-link">Flux de navigation</a></li>
                <li className="mb-2"><a href="#react-router-dom" className="blog-link">react-router-dom</a></li>
                <li className="mb-2"><a href="#moncode" className="blog-link">Mon code</a></li>
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
            <h3>Article : Navigation sur le site Blinxon</h3>
            <p>Une barre de navigation est obligatoire si nous concevons un site contenant plusieurs pages. Les utilisateurs doivent pouvoir naviger aisément sur notre site. Cet article va vous détailler la conception de la barre de navigation pour le site de l'association Blinxon.</p>
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
              <p>Les membres de l'association souhaitaient une navigtion simple et qui permette à l'utilisateur d'accéder à tout leur contenu peu importe où ils se trouvent sur la page ou sur le site.</p>
              <div className="p-4">
                <h5>Solution</h5>
                <p>La solution était donc toute trouvée : une barre de navigation classique mais toujours visible, collée en haut de l'écran afin d'y avoir accès à tout instant.</p>
              </div>
            </div>

            {/*Second bloc : Détail de la solution*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="detail">Détail de la solution</h3>
              <p>Après avoir choisi d'utiliser une barre de navigation fixe, collée en haut de page, il me fallait déterminer quels liens et quel contenu mettre à l'intérieur afin de pouvoir les prioriser et savoir l'ordre des liens.</p>
              <p>Ce travail fût assez simple, le projet de participation au 4L Trophy, qu'ambitionne l'association Blinxon se divise très simplement en grandes parties. Ces dernières sont les suivantes :</p>
              <ul>
                <li>Présentation de l'équipage</li>
                <li>Qu'est ce que le 4l Trophy</li>
                <li>Qui sont 'Enfants du désert' (L'association partenaire du raid)</li>
                <li>Comment aider l'équipage (en tant qu'entreprise ou particulier)</li>
                <li>Les réseaux sociaux de l'équipage</li>
              </ul>
              <p>Une fois ces différentes parties vues et validées par ma tutrice de stage, j'ai pu commencer mon développement. J'ai d'abbord commencé par chercher des mots clés, rapides et efficaces qui rentrent dans une barre de navigation et qui soient explicites sur le contenu que l'utilisateur verra.</p>
              <p>J'ai donc fini avec ces différents liens :</p>
              <ul>
                <li><strong>"Accueil"</strong> : Retour à la landing page du site.</li>
                <li><strong>"L'équipage"</strong> : Section de présentation de l'équipage</li>
                <li><strong>"Le Raid"</strong> : Section de présentation du 4L Trophy</li>
                <li><strong>"Enfants du désert"</strong> : Section de présentation de l'association partenaire</li>
                <li><strong>"Nous aider"</strong> : Section de présentation des moyens pour aider l'association dans leur aventure.</li>
                <li><strong>"Nos réseaux"</strong> : Section contenant tous les liens externes qui ramènent vers les différents réseaux sociaux de l'association.</li>
              </ul>

              <p>Dans la prochaine section de cet article nous passerons en revue la structure générale et les éléments importants du code de cette fameuse barre de navigation. Nous introduirons aussi un paquet npm nommé <span className="overlined"><a style={{color:"black"}} rel="noopener noreferrer" target="_blank" href="https://reactrouter.com/web/guides/quick-start">react-router-dom</a></span>.</p>
            </div>

            {/*Troisième bloc : Flux de navigation*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="flux">Flux de navigation sur le site</h3>
              <p>Cette courte section de l'article vise à vous montrer quels sont les différents flux de navigation sur le site de l'association. Pour ce faire, voilà ci-dessous plusieurs schéma vous indiquant les possibilités de navigation.</p>
              <div className="col-12 d-flex flex-row justify-content-center">
                <img style={{maxWidth:"100%",maxHeight:"80vh"}} src={fluxNavigation} alt="Flux de navigation du site"/>
              </div>
              <p className="mt-3">Comme vous pouvez le voir, nous pouvons accéder à toutes les pages du site à partir de n'importe quelle page. Tout est accessible à tout moment.</p>
            </div>

            {/*Quatrième bloc : react-router-dom*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="react-router-dom">react-router-dom</h3>
              <p><span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="https://reactrouter.com/web/guides/quick-start">react-router-dom</a></span> est une extension de React qui permet de gérer les routes d’une application côté client. Il permet de synchroniser (d’associer) des composants graphiques React à des urls.</p>
              <p>Pour notre navigation, nous utiliserons trois éléments que nous fourni <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="https://reactrouter.com/web/guides/quick-start">react-router-dom</a></span> :</p>
              <img style={{maxWidth:"100%"}} src={reactRouterDomElements} alt="Elements de react-router-dom utilisés"/>

              <p className="pt-3">Avant de regarder le code de notre Navbar en détail, nous allons regarder comment marchent les trois éléments cités précédement.</p>
              <div className="p-4">
                <h5>À savoir :</h5>
                <p>La norme HTML5 apporte une API permettant la manipulation de l’historique du navigateur : l’API history. L’interface <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/fr/docs/Web/API/Window/history">window.history</a></span> permet de manipuler l’historique et de réécrire les URL sans déclencher le chargement de celle-ci sur le serveur.</p>
                <h5 className="mt-5">BrowserRouter</h5>
                <p>L'élément <code>&#60;BrowserRouter/&#62;</code> profite de l'API History et surcharge cette fameuse interface <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/fr/docs/Web/API/Window/history">window.history</a></span> afin de rendre possible l'association de routes à des composants React.</p>
                <h5 className="mt-5">Route</h5>
                <p>L'élément <code>&#60;Route/&#62;</code> est l'élément principal de <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="https://reactrouter.com/web/guides/quick-start">react-router-dom</a></span>. On utilise Route dès lors qu'un composant doit être rendu en fonction d'une certaine route.</p>
                <p>Par exemple :</p>
                <img style={{maxWidth:"100%"}} src={reactRouterDomRouteExemple} alt="Exemple d'utilisation de l'élément Route"/>
                <p className="mt-3">Route avec rendu d'un composant :</p>
                <img style={{maxWidth:"100%"}} src={reactRouterDomRouteExempleWithComponent} alt="Exemple d'utilisation de l'élément Route avec rendu d'un composant"/>
                <h5 className="mt-5">Switch</h5>
                <p>L'élément <code>&#60;Switch/&#62;</code> permet simplement de définir plusieurs Routes.</p>
                <p>Par exemple :</p>
                <img style={{maxWidth:"100%"}} src={reactRouterDomSwitchExemple} alt="Exemple d'utilisation de l'élément Switch"/>
              </div>
            </div>

            {/*Cinquieme bloc : Mon code*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="moncode">Mon code</h3>
              <p>Maintenant, je vais vous présenter mon code pour la barre de navigation du site de l'association Blinxon :</p>
              <p>La barre de navigation que j'ai développée s'appuie sur tous les principes que nous avons déjà vus :</p>
              <ul>
                <li>L'utilisation des <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="/article/installation-de-react#react">fonctions-composants</a></span>.</li>
                <li>L'utilisation de <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="https://reactrouter.com/web/guides/quick-start">react-router-dom</a></span>.</li>
              </ul>
              <p>Je précise aussi que pour la conception de cette navbar et aussi pour tout le site de Blinxon, j'utilise <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/">Bootstrap 4</a></span>.</p>
              <hr style={{width:"60%"}}/>
              <p>Le code est très classique, et ne comporte que des élément HTML simple : <code>ul, li, div, a</code></p>
              <p>La barre de navigation est rendue responsive sur mobile et tablette grâce aux différentes classes <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/">Bootstrap 4</a></span>.</p>
              <p>Le site de Blinxon possède un <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="/article/compte-a-rebours">compte à rebours</a></span> indiquant la date du départ du Raid 4L Trophy. Ce compte à rebours est visible dans la barre de navigation et est un composant React à part, simplement utilisé dans notre navbar.</p>
              <p>Voilà ci-dessous le code de la barre de navigation. Comme vous pouvez le voir c'est un composant React, mais ce n'est pas une <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="/article/installation-de-react#react">fonction-composant</a></span>; j'ai utilisé à la place une autre méthode pour créer un composant React : Une classe Javascript qui étend l'objet React 'Composant'.</p>
              <p>Vous pouvez aussi appercevoir certaines classes Bootstrap de base, laissées inchangées car ce n'était pas utile.</p>
              <img style={{maxWidth:"100%"}} src={navbarCode} alt="Code source de la barre de navigation du site Blinxon"/>

              <p className="mt-5">Comme je l'ai dis plus haut, j'ai fait de cette barre de navigation un composant React, qui, de fait est utilisé comme suit dans notre fichier <code>App.js</code> avec les éléments de notre extension <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="https://reactrouter.com/web/guides/quick-start">react-router-dom</a></span> :</p>
              <p>Par la même occasion, vous pouvez voir comment j'ai défini mes différentes routes avec l'élément <code>&#60;Route/&#62;</code> présenté précédement. Certaines routes ne renvoient pas de composants car à l'heure où j'écris cet article, le site n'est pas encore terminé.</p>
              <img style={{maxWidth:"100%"}} src={navbarUse} alt="Code d'utilisation de la barre de navigation dans App.js"/>
            </div>

            {/*Sixième bloc : Problèmes rencontrés*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="problemes">Problèmes rencontrés</h3>
              <p>Développer une barre de navigation grâce aux outils que j'ai utilisé peut s'avérer plutôt simple, mais nous ne sommes tout de même pas à l'abri des problèmes et des contre-temps. Je n'ai pas rencontré de soucis majeurs mais la partie responsive s'est montrée plus complexe qu'initialement prévue. <br/>La disposition des éléments n'était pas optimale et créait des débordements sur les bords de l'écran en version mobile, ce qui a eu pour effet de laisser la possibilité à l'utilisateur de 'scroller' vers la droite en direction d'une partie de page blanche qui n'avait rien à faire ici.</p>
              <p>Le problème venait de mon composant compte à rebours qui n'était pas adapté pour rentrer dans un espace si restreint. J'ai donc réglé le soucis en donnant à ce fameux composant des propriétés de taille de texte, ce qui le rend désormais personnalisable à souhait en terme de taille.</p>
              <img style={{maxWidth:"100%"}} src={timerIssueFont} alt="Composant compte à rebours et sa propriété"/>
              <p className="mt-3">Le reste de la barre de navigation n'a pas posé de soucis, c'était un exercice plutôt basique et sans trop de difficultés.</p>
            </div>

            {/*Septième bloc : Conclusion*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="conclusion">Conclusion</h3>
              <p>Pour conclure cet article, je retiendrais que les barres de navigation, bien que des éléments communs et indissociables des sites web, sont la clé vers la création d'un site agréable à utiliser. Il ne faut pas les négliger et surtout réussir à faire en sorte qu'elles soient les plus compréhensibles et 'user-friendly' possible.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavbarArticle;
