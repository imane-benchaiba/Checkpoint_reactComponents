import axios from "axios";
import { useState, useEffect } from "react";
import Cart from "./Cart";

const Top = () => {
  const [populars, setPopular] = useState();
  const getPopular = async () => {
    try {
      const reponse = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=43b746b767edc8522cb6200aa1821bcb"
      );
      setPopular(reponse.data.results);
      console.log(reponse.data.results);
    } catch (error) {}
  };
  useEffect(() => {
    getPopular();
  }, []);
  return (
    <div className="popular_container">
      {populars &&
        populars.map((popular) => <Cart movie={popular} key={popular.id} />)}
    </div>
  );
};

export default Top;
