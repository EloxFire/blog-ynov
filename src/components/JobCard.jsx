import React from 'react';
import _ from 'lodash';

import '../sass/styles.scss';

function JobCard(props){
  return(
    <div className="job-card mb-3 col-4">
      <h2>Année {props.year} : </h2>
      <hr style={{backgroundColor:"#9146FF"}}/>
      {props.small == null ? null : <small style={{fontSize:"90%"}}>{props.small}</small>}
      <a style={{color:"black",textDecoration:"none"}} href={`/stage${props.company}`}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img style={{maxHeight:"15vh"}} src={require(`../img/logos-entreprises/${props.company}.png`)} alt={`Logo ${props.company}`}/>
          <span>{_.capitalize(props.company)}</span>
        </div>
      </a>
    </div>
  )
}

export default JobCard;
