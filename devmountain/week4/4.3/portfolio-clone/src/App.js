import React, {Component} from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faBars);


class App extends Component {
  render(){
  return (
    <div><div className="App">
      <header id='header2'></header>
      <img id='edcpic' src="https://blackrockdigital.github.io/startbootstrap-agency/img/header-bg.jpg" alt="edc pic"/>
      <header className="App-header">
        <section id='bootstrap'>Start Bootstrap</section>
        <button id='menu'>MENU<FontAwesomeIcon icon="bars" id='hamburger'/></button>
        <section id='links'>
          <a>SERVICES</a>
          <a>PORTFOLIO</a>
          <a>ABOUT</a>
          <a>TEAM</a>
          <a>CONTACT</a>
        </section>
      </header>
      <section className='centered'>
        <h1 id='welcome'>Welcome To Our Studio!</h1>
        <h1 id='nice'>IT'S NICE TO MEET YOU</h1>
        <button id='tell-me-button'>TELL ME MORE</button>
      </section>
    </div>
    </div>
  );
  }
}

export default App;
