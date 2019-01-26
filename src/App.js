import React, { Component } from 'react';
import './App.css';
import apiKey from './config.js';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';

//import components
import Header from './components/Header';
import Nav from './components/Nav';
import Gallery from './components/Gallery';


class App extends Component {

  constructor() {
    super();
    this.state = {
      pics: [],
      loading: true
    };
  }

  componentDidMount(){
    this.performSearch();
  }

  performSearch = (query = 'fish') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header onSearch={this.performSearch}/>
          <Nav />
          <Route exact path="/" render={() =>
              (this.state.loading)
                ? <h3>Loading...</h3>
                : <Gallery  data={this.state.pics} loading={this.state.loading}/>
          } />
          <Route path="/cats" render={() => <Gallery data={this.state.pics} loading={this.state.loading} search={this.performSearch('cats')} />} />
          <Route path="/dogs" render={() => <Gallery data={this.state.pics} loading={this.state.loading} search={this.performSearch('dogs')} />} />
          <Route path="/computers" render={() => <Gallery data={this.state.pics} loading={this.state.loading} search={this.performSearch('computers')} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
