import React, { Component } from 'react';
import {Navbar,Panel,Row} from 'react-bootstrap';
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
       );
   }
}

export default NavBar;
