import React, { Component } from 'react';
import '../../../sass/styles.scss';

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
                <li className="mb-2"><a href="#singlepage" className="blog-link">Single page, c'est quoi ?</a></li>
                <li className="mb-2"><a href="#single-page-et-react" className="blog-link">Single page & React</a></li>
                <li className="mb-2"><a href="#navigation-sur-un-site-monopage" className="blog-link">Navigation sur du single page ?</a></li>
                <li className="mb-2"><a href="#inconvenient" className="blog-link">Inconvénient ?</a></li>
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
              <h3 id="environement">Single page, c'est quoi ? </h3>
              <p>Un site en single page (SPA pour Single Page Application ou <span className="overlined"><a href="https://fr.wikipedia.org/wiki/Application_web_monopage" style={{color:"black"}} target="_blank" rel="noopener noreferrer">Application Web Monopage</a></span> en français) est une application ou site web accessible via une page unique.</p>
              <p>Le but est de fluidifier au maximum l'expérience utilisateur en évitant le chargement de nouvelles pages au fur et à mesure de la navigation.</p>
            </div>

            {/*Second bloc : Single page & React*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="single-page-et-react">SPA & React</h3>
              <p><span className="overlined"><a href="https://fr.reactjs.org/" style={{color:"black"}} target="_blank" rel="noopener noreferrer">ReactJS</a></span> est une bibliothèque javascript développée par Facebook depuis 2013. Son objectif principal est de faciliter la création d'applications monopages. React a été créé dans ce but premier.</p>
              <p>C'est la raison pour laquelle c'est une solution parfaite pour la mission qui m'est confiée. L'association Blinxon a besoin d'un site jeune, dynamique et facile d'utilisation. Créer un site monopage semblait être donc la solution adéquate. De plus, je possédais déjà de bonnes connaissances avec React.</p>
            </div>

            {/*Troisième bloc : Navigaion sur une SPA*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="navigation-sur-un-site-monopage">Navigation sur un site monopage</h3>
              <p>Avoir un site en single page ne veut pas dire que la navigation n'existe plus, au contraire. Et la preuve en est : Le site de <span className="overlined"><a style={{color:"black"}} target="_blank" rel="noopener noreferrer" href="https://blinxon.enzoavagliano.fr">Blinxon</a></span> possède toujours une barre de navigation.</p>
              <p>Nous nous trouvons sur un site monopage dans un type de navigation différent. En effet, les liens présents dans cette barre de navigation ne ramènent pas vers des pages, mais bien des sections de la seule et unique page existante.</p>
              <p>Dans notre cas, la barre de navigation nous enmène vers une certaine section lorsque nous cliquons sur un des liens. Notre barre de navigation ne nous sert dans notre cas précis uniquement si l'utilisateur connais la globalité du sujet abordé dans le site, mais qu'il cherche une information précise. Notre navbar (barre de navigation) ne s'adresse pas aux nouveaux visiteurs du site.</p>
              <p>Ce qui nous amène à la <span className="overlined"><a style={{color:"black"}} href="#inconvenients">section suivante</a></span> de cet article.</p>
            </div>

            {/*Quatrième bloc : Inconvénients*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="inconvenient">Inconvénient ?</h3>
              <p>Comme je l'ai indiqué dans la <span className="overlined"><a style={{color:"black"}} href="#navigation-sur-un-site-monopage">section précédente</a></span>, notre barre de navigation ne s'adresse pas aux nouveaux visiteurs.</p>
              <p>Cet élément peut nous faire douter de l'efficacité et de la simplicité d'utilisation de notre site puisque la navigation se fit uniquement par sections. Et c'est tout à fait normal. Mais dans le cas ou le site de <span className="overlined"><a style={{color:"black"}} href="https://blinxon.enzoavagliano;fr">Blinxon</a></span> propose à l'utilisateur de découvrir son hitoire et son projet au fil du site. L'utilisateur n'ayant jamais consulté le site se voit soulagé par le fait qu'il n'ai pas à découvrir le site par lui même en navigant à l'aveugle. Ce dernier va se sentir plus libre et plus décontracté lors de la lecture de notre site et des informations que nous voulons lui transmettre.</p>
              <p>L'élément que l'on pensait nous défavoriser, peut donc s'avérer au final être un atout non négligeable dans le contexte dans lequel nous voulons présenter notre site.</p>
            </div>

            {/*Cinquième bloc : Conclusion*/}
            <div className="margin-separator">
              <hr/>
              <h3 id="conclusion">Conclusion</h3>
              <p>Pour conclure cet article, je dirais que chercher la meilleure navigation possible pour ma mission aura été dans la forme très simple mais dans le fond, une vraie partie de questionnements. En effet, il s'agissait de réussir à déterminer si un site en single page avec une navigation réduite serait la bonne solution pour le projet. Après en avoir longement discuté avec ma tutrice de stage, nous avons convenu que c'était la solution à choisir.</p>
              <p>Cette dernière aura été relativement simple à développer et à mettre en place, ce qui fût un gain de temps dans le développement des composants suivants.</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default SinglePageArticle;
