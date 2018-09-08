import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './containers/Home';
import Container from './components/Container';
import './App.css';
import ArticleSingle from './containers/ArticleSingle';
import Navigation from './components/Navigation';


class App extends Component {
  render() {

    const navitems = [
      {
        id: 1,
        internal: true,
        href: '/',
        text: 'Home'
      },{
        id: 2,
        internal: true,
        href: '/about',
        text: 'About'
      }
    ];

    return (
      <Router>
        <div>
          <Container>
            <Navigation items={navitems} />
          </Container>
          <Container>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/article/:article_id" component={ArticleSingle}></Route>
          </Container>
        </div>
      </Router>
    );
  }
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default App;
