import React, { Component } from 'react';

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
                <li><a href="#association" className="blog-link">L'association</a></li>
                <li className="mb-2" style={{listStyleType:"none"}}>
                  <ul>
                    <li><a href="#association" className="blog-link">Besoins</a></li>
                  </ul>
                </li>
                <li className="mb-2"><a href="#missison" className="blog-link">Ma missison</a></li>
                <li className="mb-2"><a href="#articles" className="blog-link">Articles de mission</a></li>
                <li className="mb-2"><a href="#conclusion" className="blog-link">Conclusion</a></li>
              </ul>
              <hr/>
              <a href="#articles">Accéder aux articles</a>
              <hr/>
              <p>Articles en vrac :</p>
              <ul>
                <li><a href="/article/installation-de-react">Installation de ReactJS</a></li>
                <li><a href="/article/barre-de-navigation">Barre de navigation</a></li>
              </ul>
              <hr/>
            </div>
          </div>

          {/*CONTENU DU RAPPORT DE STAGE*/}
          <div className="col-lg-9 col-12 p-5">
            <h3>Stage bénévole en association - Blinxon</h3>
            <p>Blinxon est une association qui a pour but de participer au mythique raid humanitaire '4L Trophy' en février 2021.</p>
            <hr/>
            <div className="col-12 text-center mb-5">
              <img style={{maxHeight:"20vh"}} src={blinxonLogo} alt="Logo de l'associaiton Blinxon"/>
              <p>Logo de l'association</p>
            </div>

            {/*Premier bloc : L'association*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="association">L'association</h3>
              <p>Blinxon a été fondée le 15 mars 2020 avec un but en tête : participer au <u><a style={{textDecoration:"none",color:"black"}} target="_blank" rel="noopener noreferrer" href="https://www.4ltrophy.com">4L Trophy 2021</a>.</u></p>
              <p>C'est un défi un peu fou, mais qui en vaut la peine ! Un raid humanitaire réservé aux jeunes de 18 à 28 ans, partant de Biarritz dans les Pyrénées Atlantiques et avec pour destination Marrakech au Maroc !</p>
              <p>Afin de réaliser ce projet, l'association composée de deux membres : Enzo Avagliano (Président) et Olivia Masson (Trésorière), doivent réunir un budget assez conséquent, près de 9000€, afin de couvrir tous les frais nécéssaires, dont l'inscription au raid.</p>
            </div>

            {/*Second bloc : Besoins de l'association*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="besoins">Besoins de l'association</h3>
              <p>Pour réunir le budget évoqué ci-dessus, les deux membres de l'association ont déjà mis en place plusieurs solutions :</p>
              <ul>
                <li>Une cagnotte en ligne, ouverte à tout don public</li>
                <li>Un dossier de sponsoring, leur permettant de démarcher des entreprises afin d'établir des contrats de partenariat financier en échange de publicité.</li>
                <li>Un panel de réseaux sociaux (Instagram, Twitter, Facebook), sur lesquels ils postent régulièrement les dernières informations sur leur préparation pour l'aventure.</li>
              </ul>
              <p>Toutes ces solutions sont utiles à leur manière, mais l'association à besoin de plus de visibilité et d'un endroit capable de rassembler toutes leurs informations, contacts, posts, nouvelles en un seul point. Et cette dernière solution est toute trouvée : <strong>Un site web</strong>.</p>
            </div>

            {/*Troisième bloc : Ma mission*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="mission">Ma mission</h3>
              <p>La mission qui m'est confiée est donc relativement simple. Concevoir et développer un site web responsive, moderne, aux couleurs de Blinxon et qui soit assez ergonomique afin d'y placer toutes les informations nécessaires pour augmenter les chances des membres de l'association dans leur recherche de fonds financiers.</p>
              <p>Vous pourrez découvrir le déroulement de tout le projet dans les articles qui suivent cette introduction.</p>
            </div>

            {/*Quatrieme bloc : Articles de mission*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="articles">Articles</h3>
              <p>Cette section vous permet d'accéder aux différents articles que j'ai réalisé et qui décrivent le processus de développement et d'avancement de ma mission.</p>
              <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
                <ArticleCard section="Tutoriel" title="Instalation de ReactJS" image="react-setup.png" write_date="1595960936" link="installation-de-react"/>
                <ArticleCard section="Article" title="Processus de création du site" image="creation-process.png" write_date="1596136004" link="processus-de-creation"/>
                <ArticleCard section="Article" title="Barre de navigation" image="navbar-coding.png" write_date="1596474362" link="barre-de-navigation"/>
                <ArticleCard section="Article" title="Site en single page ?" image="single-page.png" write_date="1597079162" link="single-page"/>
                <ArticleCard section="Article" title="Charte graphique" image="charte-graphique.png" write_date="1597479826" link="charte-graphique"/>
                <ArticleCard section="Article" title="Compte à rebours" image="countdown.png" write_date="1597925225" link="compte-a-rebours"/>
              </div>
            </div>

            {/*Cinquième bloc : Conclusion*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="besoins">Conclusion</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StageBlinxon;
