import axios from "axios";
const fetchTrendingMovies = async (apiKey,activePage,setMovies,setTotalPages) => {
    try {
        const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=${activePage}`
        const response = await axios.get(apiUrl);
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
    }
    catch(error){
        console.error('Error fetching data:', error);
    }
}


export default fetchTrendingMovies ;