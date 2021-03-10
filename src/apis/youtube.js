import axios from 'axios'
import APIKEY_YT from './ApiKey'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: APIKEY_YT,
    part: 'snippet',
    maxResults: 5,
    type: 'video',
  },
})
