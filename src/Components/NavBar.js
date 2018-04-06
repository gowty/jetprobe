import React, { Component } from 'react';
import '../Css/App.css';

class NavBar extends Component {
   render() {
       return (
             <div>
             <Panel className="sideNav">
             <Panel.Body>
             <div className="sidebar">
              <Row style={{marginTop:"30px"}}>
              <i className="fas fa-home"></i>
              </Row>
              <Row style={{marginTop:"30px"}}>
              <i className="fab fa-dribbble" style={{color:"#007bbf"}}></i>
              </Row >
              <Row style={{marginTop:"30px"}}>
              <i className="far fa-clipboard"></i>
              </Row>
              <Row style={{marginTop:"30px"}}>
              <i className="fas fa-folder"></i>
              </Row>
              </div>
             </Panel.Body>
             </Panel>
             <Navbar style={{backgroundColor:"#fff"}}>
               <Navbar.Header>
                  <Navbar.Brand>
                    <div><i className="fas fa-bars" style={{paddingleft:"-120px"}}></i></div>
                  </Navbar.Brand>
               </Navbar.Header>
              <Navbar.Collapse>
                 <Navbar.Text pullRight><i className="fas fa-user fa-2x"></i>&nbsp;&nbsp;Cameron Svensson</Navbar.Text>
              </Navbar.Collapse>
            </Navbar>

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
