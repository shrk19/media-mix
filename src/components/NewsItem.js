import React, { Component } from 'react'

export default class NewsItem extends Component {

  

  render() {
    let {title, context, imageUrl, url} = this.props;
    return (

      <div className="card my-4" style={{width: "16rem", height: "30rem", margin: "auto"}}>
        <img src={imageUrl} style={{height: "150px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title" >{title.slice(0,100)}...</h5>
          <p className="card-text">{context.slice(0, 160)}...</p>
        </div>
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-light w-75" style={{position: "relative", bottom: "12px", margin: "auto"}}>Read more</a>
      </div>     
    )
  }
}
