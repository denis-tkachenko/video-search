import axios from 'axios'

const KEY = 'AIzaSyBUQaGD1o38OHpG_LIYxXR6XNAYEjnjgGk'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})