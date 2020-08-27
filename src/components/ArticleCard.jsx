import React from 'react';
import Timestamp from 'react-timestamp';

function ArticleCard(props){

  let articleCardStyle = {
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    height: "45vh",
    width: "30vh",
  }

  let articleImage = {
    height: "50%",
    borderRadius: "10px 10px 0 0",
    backgroundImage: `url(${require(`../img/cover-articles/${props.image}`)})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
  }

  return(
    <div style={articleCardStyle} className="d-flex flex-column m-3">
      <div style={articleImage}></div>
      <div style={{height:"50%"}} className="p-3 d-flex flex-column">
        <span>{props.section}</span>
        <span>{props.title}</span>
        <div style={{height:"1px",backgroundColor:"rgba(0, 0, 0, 0.1)"}} className="mb-4"></div>
        <a style={{color:"#9146FF",fontWeight:"bold"}} href={`/article/${props.link}`}>Accéder à l'article.</a>
        <span style={{fontWeight:"normal",textTransform:"lowercase",fontSize:"80%"}} className="align-self-end"><Timestamp  autoUpdate date={props.write_date}/></span>
      </div>
    </div>
  )
}

export default ArticleCard;
