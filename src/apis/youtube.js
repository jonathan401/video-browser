import axios from 'axios';

const KEY = 'AIzaSyDgKTZw5a9-oBRg42JEavodQ63mS47WhQw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 50,
    key: KEY
  }
});
