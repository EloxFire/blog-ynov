import React, { Component } from 'react';
import '../../../sass/styles.scss';

class CreationProcess extends Component{
  render(){
    return(
      <div id="reactsetup" className="d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-column justif-content-center align-items-center">
        <div className="col-9 d-flex flex-row">
          <div className="d-none d-xs-none d-sm-none d-md-none d-lg-block col-3 p-5 table-content-container">
            <div className="sticky-top pt-5">
              <h4>Table des matières</h4>
              <hr/>
              <ul>
                <li className="mb-2"><a href="#environement" className="blog-link">Environement de travail</a></li>
                <li className="mb-2"><a href="#environement-dev" className="blog-link">Environement de développement</a></li>
                <li className="mb-2"><a href="#communication" className="blog-link">Communication</a></li>
                <li className="mb-2"><a href="#validation" className="blog-link">Validation & Ajustements</a></li>

                <li className="mb-2"><a href="#articles" className="blog-link">Articles</a></li>
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
            <h3>Article : Processus de création du site.</h3>
            <p>Ce petit article vise à vous expliquer le déroulement global de mon stage ainsi que mes conditions de travail.</p>
            <hr/>
            {/*<div className="col-12 text-center mb-5">
              <img style={{maxHeight:"20vh"}} src={reactLogo} alt="Logo de l'associaiton Blinxon"/>
              <p>Logo de ReactJS</p>
            </div>*/}

            {/*Premier bloc : Environement de travail*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="environement">Environement de travail</h3>
              <div className="p-4">
                <h5>Lieu de travail</h5>
                <p>J'effectue mon stage dans l'association Blinxon, je suis aussi président de cette association. Le siège social de Blinxon est situé au <span className="overlined">66 impasse des romarins à Saint Cannat</span>, je travaille donc au siège de l'association, c'est à dire chez moi.</p>

                <h5>Journées</h5>
                <p>J'effectue des journées de <span className="overlined">8 heures</span> de travail sur les horaires suivantes : </p>
                <ul>
                  <li><span className="overlined">Lundi au Vendredi de 9h à 17h</span>.</li>
                </ul>
              </div>
            </div>

            {/*Second bloc : Environement de développement*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="environement">Environement de développement</h3>
              <div className="p-4">
                <h5>Éditeur de code</h5>
                <p>Depuis mon entrée chez Ynov en 2018, j'utilise l'éditeur de code <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="https://atom.io">Atom Editor</a></span> (développé par Github) qui est pour moi le plus simple, le plus rapide et le plus beau graphiquement. Atom Editor est un des plus grand riveaux de <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="https://code.visualstudio.com">Visual Studio Code (VS Code)</a></span>.</p>

                <h5>Technologies & Outils</h5>
                <p>Pendant toute la durée du stage j'utilise plusieurs outils et technologies pour la conception, le développement, l'organisation de mon travail. Voilà ci-dessous une liste globale de ces différents outils :</p>
                <ul>
                  <li>ReactJS (Framework Javascript).</li>
                  <li>Github (Versionning de code).</li>
                  <li>Trello (Organisation des taches et fonctionnalitées).</li>
                  <li>Gimp (Retouches images et photo du site).</li>
                  <li>Google (Recherches et problèmes).</li>
                  <li>Carbon.now (Images code sources dans les articles).</li>
                </ul>
              </div>
            </div>

            {/*Troisième bloc : Communication*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="environement">Communication dans l'association</h3>
              <p>La communication dans une association comportant seulement deux memebres est relativement rapide est simple. Dans le contexte particulier de mon stage il était assez simple d'informer ma tutrice de stage (trésorière de l'association) de mes dernières avancés. Nous communicons par mail si le besoin en est mais a 95% tu temps nous sommes ensemble en présentiel quand il s'agit de parler site web.</p>
            </div>

            {/*Quatrième bloc : Validation & Ajustements*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="environement">Validation & Ajustuments</h3>
              <p>Pour ce qui relève de la validation du travail, le tout est répartit en trois étapes :</p>
              <div className="p-4">
                <h5>Imagination :</h5>
                <p>Cette première phase à pour simple but de mettre en commun les idées, pour moi annoncer à ma tutrice ce qu'il est possible de faire ou non, la complexité ou non de certains composants et de voir ensemble comment nous voulons que les différentes parties soient organisées, designé etc...</p>
                <p>Nous essayons donc pendant cette partie de produire des <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/Wireframe_(design)">Wireframes</a></span> afin de placer les éléments dans leur globalité sur la page.</p>
                <p>À noter que la durée de cette phase d'imagination peut durer plus ou moins longtemps en fonction du rendu final souhaité.</p>

                <h5 className="mt-5">Développement :</h5>
                <p>La phase de développement aussi peut varier en durée, mais très généralement j'essaie de finaliser les rendus en maximum 5 jours afin que nous puissions passer à la validation et au ajustements le plus rapidement possible afin de ne pas perdre trop de temps à faire des éléements qui ne correspondraient pas tout à fait ou qui ne rendraient pas comme nous l'immaginions au debut du processus.</p>
                <p>Cette phase est très classique et reste une partie de développement pure.</p>

                <h5 className="mt-5">Validation :</h5>
                <p>La validation se fait avec la présence d'Olivia, ma tutrice de stage. C'est avec elle que nous regardons le rendu final des éléments développés et c'est à ce moment aussi que nous décidons si des ajustements doivent être réalisés.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default CreationProcess;
