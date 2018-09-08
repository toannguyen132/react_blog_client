import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes, {arrayOf} from 'prop-types';
import theme from 'theme';

const Nav = styled.ul`
  list-style: none;
  list-style-image: none;
  list-style-position: outside;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  display: inline-block;
  a{
    display: block;
    padding: 5px 25px;
    text-decoration: none;

    color: ${theme.fg};
  }
  &:first-child{
    a{
      padding-left: 0;
    }
  }
`;

class Navigation extends Component {
  render(){
    const { items } = this.props;
    return (
      <Nav>
        { 
          items.map( item => (
            <NavItem key={item.id}>
              { item.internal ? <Link to={item.href}>{item.text}</Link> : <a rel="noopener noreferrer" target="_blank" href={item.href}>{item.text}</a> }
            </NavItem>
          ))
        }
      </Nav>
    )
  }
}

Navigation.propTypes = {
  items: arrayOf(PropTypes.shape({
    id: PropTypes.number,
    internal: PropTypes.bool,
    href: PropTypes.string,
    text: PropTypes.string
  }))
}

export default Navigation;