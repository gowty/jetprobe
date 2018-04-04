import React, { Component } from 'react';
import '../Css/App.css';

class NavBar extends Component {
   render() {
       return (
             <div>
             <div className="nav-bar">
             <a><i className="fas fa-bars"></i></a>
              <p><i className="fas fa-user fa-2x"></i>&nbsp;&nbsp;&nbsp;Cameron Svensson &nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-caret-down"></i></p>
             </div>
             <div className="side-bar">
             <a><i style={{marginTop:"40px"}} className="fas fa-home"></i></a>
             <a style={{borderRight: "2px solid #1e73fc"}}><i style={{color:"#1e73fc"}} className="fab fa-dribbble"></i></a>
             <a><i className="far fa-clipboard"></i></a>
             <a><i className="fas fa-folder"></i></a>
             </div>
             </div>
       );
   }
}

export default NavBar;
