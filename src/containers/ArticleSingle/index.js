import React, { Component } from 'react';
import axios from 'axios';
import Article from 'components/Article';

class ArticleSingle extends Component {

  constructor(props){
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount(){
    const article_id = this.props.match.params.article_id;
    axios.get(`http://localhost/wp-json/wp/v2/posts/?slug=${article_id}`).then((resp) => {
      console.log(resp);
      this.setState({articles: resp.data});
    });
  }

  render(){
    return (
      <div>
        {this.state.articles.map((article) => 
          <Article {...article} isSingle={true}></Article>
        )}
      </div>
    )
  }
}

export default ArticleSingle;