import React, { Component } from 'react';
import {Navbar,Panel} from 'react-bootstrap';
import '../Css/App.css';

class NavBar extends Component {
   render() {
       return (
             <div>
             <Panel className="sideNav">
             <Panel.Body></Panel.Body>
             </Panel>
             <Navbar style={{backgroundColor:"#fff"}}>
               <Navbar.Header>
                  <Navbar.Brand>
                    <a className="vl">Brand</a><hr/>
                  </Navbar.Brand>
               </Navbar.Header>
              <Navbar.Collapse>
                 <Navbar.Text pullRight>Cameron Svensson</Navbar.Text>
              </Navbar.Collapse>
            </Navbar>

             </div>
       );
   }
}

export default NavBar;
