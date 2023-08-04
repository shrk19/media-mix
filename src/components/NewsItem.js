import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
    let {title, context, imageUrl, url, author, publishedAt, source} = this.props;
    return (

      <div className="card my-4" style={{ margin: "auto", width: "90%"}}>
        <span className="badge rounded-pill bg-danger w-50" style={{zindex:1,position:"absolute", top:"-10px", left:"-10px"}}>{source.name}</span>
        <img src={imageUrl} style={{height: "180px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title" >{title.slice(0,100)}...</h5>
          <p className="card-text">{context.slice(0, 160)}...</p>
          <p className="card-text"><small className="text-muted"><i>{author}</i></small></p>
          <p className="card-text"><small className="text-muted"><i>{(new Date(publishedAt).toUTCString())}</i></small></p>
        </div>
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-light w-75" style={{position: "relative", bottom: "12px", margin: "auto"}}>Read more</a>
      </div>     
    )
  }
}
