import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import Loading from './Loading';
// loading is not working

export default class News extends Component {

  static defaultProps = {
    country: 'us', 
    pageSize: 3, 
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string, 
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false, 
      page : 1, 
      totalResults : 0
    };
  }

    async componentDidMount() { 
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ada07c9b6102417db6a2b0f185fa084c&page=1&pageSize=30`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
    }

    handleNextClick = async () =>{
      if(!this.state.page + 1 <= Math.ceil(this.state.totalResults/30)){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ada07c9b6102417db6a2b0f185fa084c&page=${this.state.page+1}&pageSize=30`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          page : this.state.page + 1,
          articles: parsedData.articles, 
          loading : false
        });
      }
    }

    handlePrevClick = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ada07c9b6102417db6a2b0f185fa084c&page=${this.state.page-1}&pageSize=30`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page : this.state.page - 1,
        loading : false
      });
      
    }

  render() {   
    return (
      <div>
        <h2>Top Headlines</h2>
        {(this.state.loading) &&  <Loading/>}
        
        <div className="container">
          <div className="row">
          {this.state.articles.map((element)=>
            {return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title!==null?element.title:""} context={element.description!==null?element.description:""} imageUrl={element.urlToImage!==null?element.urlToImage:"https://www.encompass-inc.com/wp-content/uploads/2019/07/july-2019-news-and-updates-encompass-solutions-Copy.jpg" } url={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source}/>
            </div>}
          )}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-light my-3" onClick={this.handlePrevClick} disabled={this.state.page<=1}>&larr; Previous</button>
        <button type="button" className="btn btn-light my-3" onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/30)}>Next &rarr;</button>
        </div>
        </div>
    )
  }
}
