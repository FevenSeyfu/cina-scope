import React,{useState,useEffect} from "react";
import axios from "axios";

const TrendingMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const apiKey = '37f9159ef25a3d939000ae37af4753b0'
        const apiUrl = 'https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}'

        const fetchTrendingMovies = async () => {
            try {
                const response = await axios.get(apiUrl);
                setMovies(response.data.results);
                console.log('fetched')
            }
            catch(error){
                console.error('Error fetching data:', error);
            }
        }
        fetchTrendingMovies();
    }, []);
}

export default TrendingMovies ;