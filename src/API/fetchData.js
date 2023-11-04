import axios from "axios";
const fetchData = async (apiURL,setMovies,setTotalPages) => {
    try {
        const response = await axios.get(apiURL);
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
    }
    catch(error){
        console.error('Error fetching data:', error);
    }
}


export default fetchData ;