import React, { Component } from 'react';
import Form from "./components/Form";
import './App.scss';

class App extends Component {
  render(){
    return (
      <div className="app">
        <main className="app-content">
            <Form />            
        </main>
      </div>
      )
  }
}

export default App;
