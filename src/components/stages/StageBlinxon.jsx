import React, { Component } from 'react';

import StageInfos from '../StageInfos';
import ArticleCard from '../ArticleCard';
import '../../sass/styles.scss';
import blinxonLogo from '../../img/logos-entreprises/blinxon.png';

class StageBlinxon extends Component{
  render(){
    return(
      <div id="stageblinxon" className="d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-column justif-content-center align-items-center">
        <div className="col-9 d-flex flex-row">
          <div className="d-none d-xs-none d-sm-none d-md-none d-lg-block col-3 p-5 table-content-container">
            <div className="sticky-top pt-5">
              <h4>Table des matières</h4>
              <hr/>
              <ul>
                <li><a href="" className="blog-link">L'association</a></li>
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
              <a href="#articles">Acceder aux articles</a>
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
              <img style={{maxHeight:"20vh"}} src={blinxonLogo} alt="Logo de l'associaiton Blinxon"/>
              <p>Logo de l'association</p>
            </div>

            {/*Premier bloc*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="but">L'association</h3>
              <p>Blinxon à été fondée le 15 mars 2020 avec un but en tête : participer au <u><a style={{textDecoration:"none",color:"black"}} target="_blank" href="https://www.4ltrophy.com">4L Trophy 2021</a>.</u></p>
              <p>C'est un défi un peu foub, mais qui en vaut la peine ! Un raid humanitaire réservé au jeunes de 18 à 28 ans, partant de Biarritz dans les Pyrénés Atlantiques et avec pour destination Marrakech au Marroc !</p>
              <p>Afin de réaliser ce projet, l'association composée de deux membres : Enzo Avagliano (Président) et Olivia Masson (Trésorière), doit réunir un budget assez conséquent, près de 9000€, afin de couvrir tous les frais nécéssaires, dont l'inscription au raid.</p>
            </div>

            {/*Second bloc*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="besoins">Besoins de l'association</h3>
              <p>Pour réunir le budget évoqué ci-dessus, les deux membres de l'association ont déjà mis en place plusieures solution :</p>
              <ul>
                <li>Une cagnote en ligne, ouverte à tout don public</li>
                <li>Un dossier de sponsoring, leur permettant de démarcher des entreprises afin d'établir des contrats de partenariat financiers en échange de publicité.</li>
                <li>Un panel de réseaux sociaux (Instagram, Twitter, Facebook), sur lesquels ils postent régulièrement les dernières informations sur leur préparation pour l'aventure.</li>
              </ul>
              <p>Toutes des solutions sont utiles à leur manière, mais l'association à besoin de plus de visibilité et d'un endroit capable de rassembler toutes leurs information, contacts, posts, nouvelles en un seul point. Et cette dernière solution est toute trouvé : <strong>Un site web</strong></p>
            </div>

            {/*Troisième bloc*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="besoins">Ma mission</h3>
              <p>La mission qui m'est confiée est donc relativement simple. Concevoir et développer un site web responsive, moderne, aux couleurs de Blinxon et qui soit assez ergonomique afin d'y placer toutes les informations nécéssaires pour augmenter les chances des les membres de l'association dans leur recherche de fonds financers.</p>
              <p>Vous pourrez découvir le déroulement de tout le projet dans les articles qui suivent cette introduction.</p>
            </div>

            {/*Articles*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="besoins">Articles</h3>
              <p>Cette section vous permet d'accéder aux différents articles que j'ai réalisé et qui décrivent le processus de développement et d'avancement de ma mission.</p>
              <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
                <ArticleCard section="Tutoriel" title="Instalation de ReactJS" image="react-setup.png" write_date="1595872601" link="reactsetup"/>
                <ArticleCard section="Coding" title="Barre de navigation" image="navbar-coding.png" write_date="1596045401" link="navbar"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StageBlinxon;
