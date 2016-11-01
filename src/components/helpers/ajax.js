import axios from 'axios'

class Ajax {
  fetchTags () {
    return axios.get('http://localhost:3001/api/v1/tags.json')
  }  
}

export default Ajax
