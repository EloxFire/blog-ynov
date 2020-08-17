import React from 'react';

function StageInfos(props){
  return(
    <div style={{height:"25vh"}} className="col-12 d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-row justify-content-center">
      <div className="col-6">
        <h3>Stage effectué chez : {props.company}</h3>
      </div>
      <div className="col-6">test</div>
    </div>
  )
}

export default StageInfos;
