import React, { Component, } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom/cjs/react-router-dom';

export default class App extends Component {
  pageSize=8
  apikey=process.env.REACT_APP_NEWS_API
  state ={
    progress:0
  }
  setProgress=(progress) =>{
    this.setState({progress:progress})
  }
 
  
  render() {
    return (
      <div>
        <Router>
          <Navbar ></Navbar>
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} apikey={this.apikey}   key="general" pageSize={this.pageSize} country={this.country} category="general" badgecolor="dark"></News></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} apikey={this.apikey}   key="business"  pageSize={this.pageSize}country={this.country} category="business" badgecolor="primary"></News></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} apikey={this.apikey}   key="entertainment"  pageSize={this.pageSize}country={this.country} category="entertainment" badgecolor="danger"></News></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} apikey={this.apikey}   key="health" pageSize={this.pageSize}country={this.country} category="health" badgecolor="success"></News></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} apikey={this.apikey}   key="science"  pageSize={this.pageSize}country={this.country} category="science" badgecolor="secondary"></News></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} apikey={this.apikey}   key="sports"  pageSize={this.pageSize}country={this.country} category="sports" badgecolor="warning"></News></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} apikey={this.apikey}   key="technology" pageSize={this.pageSize}country={this.country} category="technology" badgecolor="info"></News></Route>
          </Switch>
        </Router>

      </div>
    );
  }
}
// Api key--fd73fb6ade624d6dbf87bbf25893be6a