import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {

  //Sets the state for the gifs
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    };
  }

  //Fetches the data for trending GIFs. fetch is a promise--
  //the thens are used as callbacks.
  //the catches are used to log errors
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'spongebob') => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data from the Giphy API', error);
      });
  }

  render() {
    //Logs the responses back to the console based off of the data that was fetched.
    console.log(this.state.gifs)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div className="main-content">
          {
            (this.state.loading)
            ? <p>Loading...</p>
            :<GifList data={this.state.gifs} />
          }
        </div>
      </div>
    );
  }
}
