import React from 'react';

function Card(props){

  let stylesBig = {
    card : {
      backgroundColor: "white",
      padding: "5px",
      borderRadius: "10px",
      border: "3px solid #9146FF",
    },
  }

  let stylesLittle = {
    card: {
      backgroundColor: "white",
      padding: "5px",
      borderRadius: "10px",
      border: "3px solid #9146FF",
    },
  }

  //Inline media query react
  //https://gist.github.com/jurassix/e401b9556ab5ec1ad888
  let styles = function(){
    if(window.innerWidth >= 769){
      return stylesBig;
    }else{
      return stylesLittle;
    }
  }

  return(
    <div className="col-8 p-3" style={styles().card}>
      <h4>{props.title}</h4>
      <div className="p-2">
        {props.age == null ? null : <li><span>Âge : </span>{props.age} ans</li>}
        {props.birth == null ? null : <li><span>Naissance : </span>{props.birth}</li>}
        {props.town == null ? null : <li><span>Lieu de vie : </span>{props.town}</li>}
        {props.text == null ? null : <p className="card-text mt-2">{props.text}</p>}
        {props.xp == null ? null : <li>J'ai <span>{props.xp} </span>années d'expérience pro.</li>}
        {props.ynov == null ? null : <li><span>Etudes : </span> J'étudie sur le Campus Ynov Aix en Provence</li>}
        {props.code == null ? null : <li><span>Je code depuis : ≈</span>{props.code} annnées</li>}
        {props.xpCode == null ? null : <p className="card-text mt-2">Je code depuis près de 4 ans maintenant. J'ai commencé avec des projet Java durant lequels je cérais mes propres plugins et add-ons afin d'ajouter des fonctionnalitées au jeu de base.</p>}
      </div>
    </div>
  )
}

export default Card;
