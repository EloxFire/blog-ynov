import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return(
      <div style={{backgroundColor:"#9146FF"}} id="footer" className="d-flex flex-row justify-content-center align-items-center">
        <small style={{fontSize:"100%"}}>Tous droits réservés | © Enzo Avagliano - 2020</small>
      </div>
    )
  }
}

export default Footer;
