import React, { Component } from 'react';


export class NewsItem extends Component {

    render() {
        let { title, description, imgUrl, newsUrl, author, date, source,badgeColor} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ margin: '0.6rem' }}>
                    <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${badgeColor}`} style={{zIndex:'1',left:'90%'}}>
                        {source}
                    </span>
                    <img src={!imgUrl ? "https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE=" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()} </small> </p>

                        <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
