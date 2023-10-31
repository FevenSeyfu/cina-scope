import axios from "axios";

export default axios.create({
    baseURL: 'https://www.omdbapi.com/',
    headers: {
        apikey :'b2e9d227'
      
    }
});