import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'theme';

const ArticleDom = styled.article`
  margin-top: 5rem;
`;

const H2 = styled.h2`
  font-size: 30px;
  color: ${theme.fg};

  a{
    text-decoration: none;
    color: ${theme.fg};
  }
`;

const Content = styled.div`
  font-size: 1.8rem;
  color: #4f4f4f;
`;

const TagContainer = styled.div`
  font-size: 0.8em;
`;

const Tag = styled.span`
  &:after{
    content: ", ";
  }
  &:last-child{
    &:after{
      display: none;
    }
  }
`;

class Article extends Component {
  render(){
    return (
      <ArticleDom>
        <H2>{ !this.props.isSingle ? <Link to={`/article/${this.props.slug}`}>{this.props.title.rendered}</Link> : this.props.title.rendered}</H2>
          { this.props.tags.length == 0 ? '' : 
            <TagContainer>
              <strong>Tags: </strong>
                {this.props.tags.map(tag => (<Tag key={tag.id}>{tag.name}</Tag>))}
            </TagContainer>
          }

        <Content dangerouslySetInnerHTML={{__html: this.props.content.rendered}}></Content>
      </ArticleDom>
    )
  }
}

Article.propTypes = {
  isSingle: PropTypes.bool,
  slug: PropTypes.string,
  title: PropTypes.shape({
    rendered: PropTypes.string
  }),
  content: PropTypes.shape({
    rendered: PropTypes.string
  }),
  tags: PropTypes.Array
}

export default Article;