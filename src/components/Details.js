import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const getDetails = async () => {
    try {
      const reponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=43b746b767edc8522cb6200aa1821bcb`
      );
      setMovie(reponse.data);
      console.log(reponse.data);
    } catch (error) {}
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div>
      {movie && (
        <>
          <h1>{movie.original_title}</h1>
          <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} />
          <p>{movie.overview}</p>
        </>
      )}
    </div>
  );
};

export default Details;
