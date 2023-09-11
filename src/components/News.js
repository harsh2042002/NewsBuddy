import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Load from './Load';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 9,
        category: 'general',
    }

    static propType = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            country: '',
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            searchItem:''
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)}- NewsBuddy`;
    }
    // async updateNews(){
    //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd73fb6ade624d6dbf87bbf25893be6a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading: true});
    //     let data = await fetch(url);
    //     let passedData = await data.json()
    //     console.log(passedData);
    //     this.setState({ articles: passedData.articles,
    //          totalResults: passedData.totalResults,
    //          loading: false
    //         });

    // }
    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let passedData = await data.json()
        console.log(passedData);
        this.setState({
            articles: passedData.articles,
            totalResults: passedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);

    }

    // handleNext = async () => {
    //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 12))) {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd73fb6ade624d6dbf87bbf25893be6a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //         this.setState({ loading: true });
    //         let data = await fetch(url);
    //         let passedData = await data.json()
    //         console.log(passedData);
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: passedData.articles,
    //             loading: false,
    //         });
    //     }
    // this.setState({page: this.state.page +1});
    // this.updateNews();
    // }

    // handlePrev = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd73fb6ade624d6dbf87bbf25893be6a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let passedData = await data.json()
    //     console.log(passedData);
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: passedData.articles,
    //         loading: false,
    //     });
    //     // this.setState({page: this.state.page -1})
    //     // this.updateNews();
    // }

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let passedData = await data.json()
            console.log(passedData);
            this.setState({
                page: this.state.page + 1,
                articles: this.state.articles.concat(passedData.articles),
                loading: false,
            });
};
handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
render() {
    return (
        <div>
            <div>
                <h1 className='text-center ' style={{ margin: "3rem 0" }}>News-Top Headlines</h1>
                {this.state.loading && <Load/>}
                <div className="search-bar">
       
      </div>
                <div>
                    <p style={{ fontSize: '1.5rem', margin: '1rem',paddingLeft:"2.2rem"}} className={`text-${this.props.badgecolor}`}> Category :- {this.capitalizeFirstLetter(this.props.category)}</p>
                </div>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Load></Load>}
                >
                    <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={!element.author ? "Unknown" : element.author} date={element.publishedAt} source={element.source.name} badgeColor={this.props.badgecolor} />
                            </div>
                        })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between ">
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-dark m-2" onClick={this.handlePrev}>&larr; Previous</button>
                        <button type="button" className="btn btn-dark m-2" disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} onClick={this.handleNext}>Next &rarr;</button>


                    </div> */}
            </div>
        </div>
    )
}
}

export default News
