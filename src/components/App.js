import React, { Component } from 'react'
import youtube from "../apis/youtube";

import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends Component { 
  state = { videos: [], selectedVideo: null }

  onSearchSubmit = async term => {
    const response = await youtube.get('/search', {q: term})

    this.setState({videos: response.data.items})
  }

  onVideoSelect = async video => {
    this.setState({selectedVideo: video})
    console.log(video)
  }

  render() {
    return ( 
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <VideoDetail selectedVideo={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </div>
    )
  }
}

export default App