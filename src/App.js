import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Home from './containers/Home';
import Container from './components/Container';
import logo from './logo.svg';
import './App.css';
import ArticleSingle from './containers/ArticleSingle';

const Nav = styled.ul`
  list-style: none;
  list-style-image: none;
  list-style-position: outside;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  display: block;

  a{
    display: block;
    padding: 5px 15px;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Container>
            <Nav>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/about">about</Link>
              </NavItem>
            </Nav>
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
