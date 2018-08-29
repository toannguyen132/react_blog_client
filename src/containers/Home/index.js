import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Article from 'components/Article';
import { loadArticles,
  loadArticlesSuccess,
  loadArticlesError } from './actions';

class Home extends Component {

  componentDidMount(){
    const {loadArticles, loadArticlesSuccess, loadArticlesError} = this.props;
    loadArticles();
    axios.get('http://localhost/wp-json/wp/v2/posts/').then((resp) => {
      loadArticlesSuccess(resp.data);
    }).catch(err => {
      loadArticlesError(err);
    });
  }

  render(){
    const articles = this.props.articles;
    return (
      <div>
        {articles.map((article) => 
          <Article key={article.id} {...article}></Article>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.home;
};

const mapDispatchToProps = dispatch => ({
  loadArticles: () => dispatch(loadArticles()),
  loadArticlesSuccess: (articles) => dispatch(loadArticlesSuccess(articles)),
  loadArticlesError: (error) => dispatch(loadArticlesError(error)),
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home);