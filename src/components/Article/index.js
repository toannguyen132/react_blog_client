import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 24px;
  color: #3f3f3f;
`;

const Content = styled.div`
  font-size: 16px;
  color: #4f4f4f;
`;

class Article extends Component {
  render(){
    return (
      <article>
        <H2>{ !this.props.isSingle ? <Link to={`/article/${this.props.slug}`}>{this.props.title.rendered}</Link> : this.props.title.rendered}</H2>
        <Content dangerouslySetInnerHTML={{__html: this.props.content.rendered}}></Content>
      </article>
    )
  }
}

export default Article;