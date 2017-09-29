import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import SearchGifForm from './components/SearchGifForm';
import GifList from './components/GifList';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      apiData: [],
      inputKeywordValue: '',
      inputLimitValue: '',
    }
    // this.searchGif = this.searchGif.bind(this);
  console.log(this.state)
  
    this.handleInputKeywordChange = this.handleInputKeywordChange.bind(this);
    this.handleInputLimitChange = this.handleInputLimitChange.bind(this);
    this.handleGifSubmit = this.handleGifSubmit.bind(this);
  }

//   componentDidMount() {
//     console.log('App did mount');
//     axios(`http://api.giphy.com/v1/gifs/search?q=${this.state.inputKeywordValue}&api_key=ac13be61daa3448c81db7e04b32be00a&limit=${this.state.inputLimitValue}`)
//     .then(res => {
//       this.setState({
//           apiData: res.data.data,
//       })
//     })
//   }
// }

// searchGif() {
//   console.log('Search gif');
//   axios(`https://api.giphy.com/v1/gifs/search?q=${this.state.inputKeywordValue}&api_key=ac13be61daa3448c81db7e04b32be00a&limit=${this.state.inputLimitValue}`)
//   .then(res => {
//     console.log(res.data.data[0].images.original.url);
//     this.setState({
//           apiData: res.data.data.images.original.url,
//       })
//   }).catch(err => console.log(err));
//   console.log(this.state);
// }

handleInputKeywordChange(event) {
  this.setState({
    inputKeywordValue: event.target.value
  })
}

handleInputLimitChange(event) {
  this.setState({
    inputLimitValue: event.target.value
  })
}

handleGifSubmit(event) {
  event.preventDefault();
  event.target.content = '';
  if(this.state.inputKeywordValue === '') {
    return alert("hey dude, put something into the line");
  }
  axios(`http://api.giphy.com/v1/gifs/search?q=${this.state.inputKeywordValue}&api_key=ac13be61daa3448c81db7e04b32be00a&limit=${this.state.inputLimitValue}`)
  .then(res => {
      this.setState({
        apiData: res.data.data,
      })
  }).catch(err => console.log(err));
}

  render() {
    console.log('App rendering', this.state)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> GIF App</h2>
        </div>
        <SearchGifForm 
          handleGifSubmit={this.handleGifSubmit}
          handleInputKeywordChange={this.handleInputKeywordChange}
          handleInputLimitChange={this.handleInputLimitChange}
          inputKeywordValue={this.inputKeywordValue}
          inputLimitValue={this.inputLimitValue}
        />
        <GifList 
          data={this.state.apiData}
        />
      </div>
    );
  }
}

export default App;

// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=ac13be61daa3448c81db7e04b32be00a&limit=5