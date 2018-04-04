import React, { Component } from 'react';
import '../Css/App.css';

class Main extends Component {
  render() {
    return (
      <div>
      <div className="container">
      <div className="main">
      <div className="col-lg-12">
      <div className="col-lg-9">
      <h3>Activities</h3>
      <ul className="nav nav-tabs" >
        <li className="active" style={{borderBottom:"2px solid #1e73fc"}}><a data-toggle="tab" href="#home">Portfolio</a></li>
        <li><a>Operations</a></li>
        <li><a>Fees</a></li>
        <li><a>Others</a></li>
      </ul>

      <div className="tab-content">
        <div id="home" className="tab-pane fade in active">
        <div className="row" style={{fontSize:"10px",textAlign:"center",marginTop:"30px",fontWeight:"900"}}>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
           <p>TYPE&nbsp;&nbsp;&nbsp;<i className="fas fa-caret-down"></i></p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
           <p>DATE&nbsp;&nbsp;&nbsp;<i className="fas fa-caret-down"></i></p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
           <p>VALUE&nbsp;&nbsp;&nbsp;<i className="fas fa-caret-down"></i></p>
        </div>
        </div>

        <div className="panel panel-default">
        <div className="panel-body"  style={{marginBottom:"-10px"}}>
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12">
           <i className="fab fa-adn"></i>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px"}}>Distribution</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px",color:"#9b9da0"}}>10 Mar 2017</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
           <p style={{marginLeft:"50px",fontSize:"15px",color:"#1e73fc"}}>$45</p>
          </div>
        </div>
        </div>

        <div className="panel panel-default pan" style={{marginTop:"-15px"}}>
        <div className="panel-body"  style={{marginBottom:"-10px"}}>
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12">
           <i className="fab fa-adn"></i>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px"}}>Rellocation</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px",color:"#9b9da0"}}>8 Mar 2017</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
           <p style={{marginLeft:"50px",fontSize:"15px",color:"#1e73fc"}}>$27</p>
          </div>
        </div>
        </div>

        <div className="panel panel-default" style={{marginTop:"-15px"}}>
        <div className="panel-body"  style={{marginBottom:"-10px"}}>
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12">
           <i className="fab fa-adn"></i>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px"}}>Other</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px",color:"#9b9da0"}}>01 Mar 2017</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
           <p style={{marginLeft:"50px",fontSize:"15px",color:"#1e73fc"}}>$33</p>
          </div>
        </div>
        </div>

        <div className="panel panel-default" style={{marginTop:"-15px"}}>
        <div className="panel-body"  style={{marginBottom:"-10px"}}>
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12">
           <i className="fab fa-adn"></i>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px"}}>Distribution</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px",color:"#9b9da0"}}>25 feb 2017</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
           <p style={{marginLeft:"50px",fontSize:"15px",color:"#1e73fc"}}>$22</p>
          </div>
        </div>
        </div>

        <div className="panel panel-default" style={{marginTop:"-15px"}}>
        <div className="panel-body"  style={{marginBottom:"-10px"}}>
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12">
           <i className="fab fa-adn"></i>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px"}}>Distribution</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px",color:"#9b9da0"}}>17 Feb 2017</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
           <p style={{marginLeft:"50px",fontSize:"15px",color:"#1e73fc"}}>$45</p>
          </div>
        </div>
        </div>

        <div className="panel panel-default" style={{marginTop:"-15px"}}>
        <div className="panel-body"  style={{marginBottom:"-10px"}}>
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12">
           <i className="fab fa-adn"></i>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px"}}>Rellocation</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px",color:"#9b9da0"}}>02 Mar 2017</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
           <p style={{marginLeft:"50px",fontSize:"15px",color:"#1e73fc"}}>$45</p>
          </div>
        </div>
        </div>

        <div className="panel panel-default" style={{marginTop:"-15px"}}>
        <div className="panel-body"  style={{marginBottom:"-10px"}}>
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12">
           <i className="fab fa-adn"></i>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px"}}>Distribution</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px",color:"#9b9da0"}}>10 Mar 2017</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
           <p style={{marginLeft:"50px",fontSize:"15px",color:"#1e73fc"}}>$45</p>
          </div>
        </div>
        </div>

        <div className="panel panel-default" style={{marginTop:"-15px"}}>
        <div className="panel-body"  style={{marginBottom:"-10px"}}>
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12">
           <i className="fab fa-adn"></i>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px"}}>Other</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
           <p style={{fontSize:"15px",color:"#9b9da0"}}>01 Mar 2017</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
           <p style={{marginLeft:"50px",fontSize:"15px",color:"#1e73fc"}}>$33</p>
          </div>
        </div>
        </div>

        </div>
      </div>

      </div>
      <div className="col-lg-3">
      <div className="panel panel-default panels">
        <div className="panel-body">
        <p style={{marginLeft:"10px",marginTop:"20px"}}>$<span style={{fontSize:"28px"}}>23,685</span><span style={{color:"#1e73fc",fontSize:"16px",fontWeight:"600",marginLeft:"50px"}}>+5.2%</span></p>
        <p style={{fontSize:"13px",marginLeft:"10px"}}>Deposits:$10,000</p>
           <button type="button" className="btn btn-primary col-lg-10 buttons" style={{borderRadius:"30px",backgroundColor:"#1e73fc",marginLeft:"15px",marginTop:"15px"}}>Add Funds<i className="fas fa-chevron-circle-right" style={{fontSize:"20px",marginLeft:"60px"}}></i></button>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Main;
