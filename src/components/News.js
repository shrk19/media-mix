import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";


 

export default class News extends Component {

  static defaultProps = {
    country: 'in', 
    pageSize: 3, 
    category: 'general', 
  }
  static propTypes = {
    country: PropTypes.string, 
    pageSize: PropTypes.number,
    category: PropTypes.string, 
  }

  constructor(){
    super();
    this.state = {
      articles : [],
      loading : true, 
      page : 1, 
      totalResults : 0
    };
  }
    
  fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=30`;
    this.setState({page: this.state.page+1});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          totalResults: parsedData.totalResults,
          articles: this.state.articles.concat(parsedData.articles), 
        });

  };

    async updateNews(){
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=30`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setProgress(50);
        this.setState({
          totalResults: parsedData.totalResults,
          articles: parsedData.articles, 
          loading: false      
        });
        this.props.setProgress(100);
    }

    async componentDidMount() { 
      this.updateNews();
    }

    handleNextClick = async () =>{
      if(this.state.page + 1 < Math.ceil(this.state.totalResults/30)){
        this.setState({
          page: this.state.page+1
        });
        this.updateNews();
      }
    }

    handlePrevClick = async ()=>{
      this.setState({
        page: this.state.page-1
      });
      this.updateNews();
      
    }

  render() {   
    return (
      <>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Loading/>}
          >
        <h2>Top Headlines</h2>
        {this.state.loading && <Loading/>}
        
        
          <div className="container">
          
          
          <div className="row">

          
          {this.state.articles.map((element)=>
            {return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title===null?"":element.title} context={element.description!==null?element.description:""} imageUrl={element.urlToImage!==null?element.urlToImage:"https://www.encompass-inc.com/wp-content/uploads/2019/07/july-2019-news-and-updates-encompass-solutions-Copy.jpg" } url={element.url} author={element.author===null?"":element.author} publishedAt={element.publishedAt} source={element.source}/>
            </div>}
          )}
          
          </div>
          
          </div>
          </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-primary my-3" onClick={this.handlePrevClick} disabled={this.state.page<=1}>&larr; Previous</button>
        <button type="button" className="btn btn-primary my-3" onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/30)}>Next &rarr;</button>
        </div> */}
        </>
    )
  }
}
