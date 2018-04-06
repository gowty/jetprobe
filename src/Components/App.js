import React, { Component } from 'react';
import NavBar from './NavBar';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Main/>
      </div>
    );
  }
}

export default App;
