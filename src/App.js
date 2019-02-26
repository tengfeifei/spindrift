import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Footer from './compenents/footer/footer'

class App extends Component {
  render() {
    return (
     <div>
       index
       {
          this.props.children
        }
        <Footer/>
     </div>
    );
  }
}

export default App;
