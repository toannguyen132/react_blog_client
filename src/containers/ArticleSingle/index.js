import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Article from 'components/Article';
import { loadArticle, loadArticleSuccess, loadArticleError } from './actions';

class ArticleSingle extends Component {

  componentDidMount(){
    const article_id = this.props.match.params.article_id;
    const { loadArticle, loadArticleSuccess, loadArticleError } = this.props;

    loadArticle();
    axios.get(`http://localhost/wp-json/wp/v2/posts/?slug=${article_id}`).then((resp) => {
      if (resp.data.length > 0){
        loadArticleSuccess(resp.data[0])
      } else {
        loadArticleError("empty data");
      }
    });
  }

  render(){
    const { article } = this.props;
    return (
      <div>
        { !article.id ? '' : <Article {...article} isSingle={true}></Article> }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.single
})

const mapDispatchtoProps = dispatch => ({
  loadArticle: () => dispatch(loadArticle()),
  loadArticleSuccess: article => dispatch(loadArticleSuccess(article)),
  loadArticleError: error => dispatch(loadArticleError(error))
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(ArticleSingle);