import React, { Component } from 'react';

import '../../../sass/styles.scss';
import reactLogo from '../../../img/logos-technos/reactjsBlue.png';
import componentExempleOne from '../../../img/images-articles/react-install/componentExempleOne.png';
import componentExempleOnePartTwo from '../../../img/images-articles/react-install/componentExempleOnePart2.png';
import reactNpx from '../../../img/images-articles/react-install/reactNpxInstall.png';
import reactNpm from '../../../img/images-articles/react-install/reactNpmInstall.png';
import reactYarn from '../../../img/images-articles/react-install/reactYarnInstall.png';

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
                <li><a href="#react" className="blog-link">React c'est quoi ?</a></li>
                <li className="mb-2" style={{listStyleType:"none"}}>
                  <ul>
                    <li><a href="#react" className="blog-link">Les composants</a></li>
                    <li><a href="#react" className="blog-link">Les props</a></li>
                    <li><a href="#react" className="blog-link">Exemple de composant</a></li>
                    <li><a href="#avis" className="blog-link">Avantages</a></li>
                    <li><a href="#avis" className="blog-link">Inconvénients</a></li>
                    <li><a href="#avis" className="blog-link">Pourqui react ?</a></li>
                  </ul>
                </li>

                <li className="mb-2"><a href="#create-react-app" className="blog-link">create-react-app</a></li>

                <li><a href="#conclusion" className="blog-link">Conclusion</a></li>
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
            <h3>Tutoriel : Installation de ReactJS</h3>
            <p>Ce tutoriel, qui rentre dans le cadre de mon stage dans l'association Blinxon, a pour but de vous apprendre comment démarrer et mettre en place un nouveau projet ReactJS.</p>
            <hr/>
            <div className="col-12 text-center mb-5">
              <img style={{maxHeight:"20vh"}} src={reactLogo} alt="Logo de l'associaiton Blinxon"/>
              <p>Logo de ReactJS</p>
            </div>

            {/*Premier bloc*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="but">ReactJS, c'est quoi ?</h3>
              <p>React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. <br/>Le but principal de cette bibliothèque est de faciliter la création d'applications web, via la création de composants dépendant d'un état et générant une page (ou portion de page) HTML à chaque changement d'état.</p>
              <div className="p-4">
                <div className="mb-5">
                  <h5>Les composants</h5>
                  <p>Les composants (ou <span className="overlined pl-1 pr-1">fonction-composant</span>) sont la manière la plus simple de rédiger un composant React car ces fonctions sont simplement des fonctions Javascript. Ces dernières permettent de découper l’interface utilisateur en éléments indépendants et réutilisables, permettant ainsi de considérer chaque élément de manière isolée et personnalisable grâce aux 'props' (Voir ci-dessous).</p>
                </div>

                <div className="mb-5">
                  <h5>Les props</h5>
                  <p>Ce que l'on appelle 'props' en React n'est rien d'autre qu'une propriété que l'on donne à une fonction-composant.</p>
                </div>

                <div className="mb-5">
                  <h5>Exemple de composant</h5>
                  <p>Le moyen le plus simple de définir un composant consiste à écrire une fonction JavaScript :</p>
                  <img style={{maxWidth:"100%"}} src={componentExempleOne} alt="Exemple de composant React"/>
                  <p>Utilisation de notre composant en précisant notre 'props'. Ici, le prénom Sara :</p>
                  <img style={{maxWidth:"100%"}} src={componentExempleOnePartTwo} alt="Exemple de composant React"/>
                </div>

                <div className="mb-5">
                  <h5>Pour ou contre ReactJS ?</h5>
                  <div style={{borderTop: "1px solid #6146FF"}} className="mt-3 d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-row justify-content-center align-items-center">
                    <div className="col-12 col-lg-6 text-center">
                      <h5 className="m-3">Avantages</h5>
                      <p>Possède un DOM virtuel</p>
                      <p>Réutilisation des composants à l'infini</p>
                      <p>Flot de données unidirectionnel pour un code stable</p>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                      <h5 className="m-3">Inconvénients</h5>
                      <p>Documentation assez pauvre</p>
                      <p>Une bibliothèque qui commence à stagner</p>
                      <p>Référencement plus complexe à cause du rendu côté client.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Troisieme bloc : create-react-app*/}
            <div className="margin-separator">
              <hr/>
              <h3>Script : create-react-app :</h3>
              <p>'create-react-app' est un script développé par les équipes de Facebook vous permettant de démarrer un projet ReactJS en une seule ligne de commande et en toute simplicité.</p>
              <div className="p-4">
                <div className="mb-5">
                  <h5>Dépendances :</h5>
                  <p>Pour utiliser 'create-react-app' il vous faut Node 10.16.0 ou supérieur.</p>
                </div>
                <div className="mb-5">
                  <h5>Installation :</h5>
                  <p>Avec NPX</p>
                  <img style={{maxWidth:"100%"}} src={reactNpx} alt="Installation de ReactJS avec npx"/>
                  <p>Avec NPM</p>
                  <img style={{maxWidth:"100%"}} src={reactNpm} alt="Installation de ReactJS avec npm"/>
                  <p>Avec Yarn</p>
                  <img style={{maxWidth:"100%"}} src={reactYarn} alt="Installation de ReactJS avec yarn"/>
                </div>
              </div>
            </div>

            {/*Quatrieme bloc : conclusion*/}
            <div className="margin-separator">
              <hr/>
              <h3>Conclusion :</h3>
              <p>ReactJS est une bibliothèque puissante et flexible permettant de concevoir des pages web dynamiques et réactives avec un minimum d'effort.</p>
              <p>ReactJS commence à atteindre ses limites en termes de nouveautés et de mises à jour de contenu mais la bibliothèque devient de plus en plus stable au fil des versions.</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default ReactSetup;
