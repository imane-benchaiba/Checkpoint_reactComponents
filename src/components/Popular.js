import axios from "axios";
import { useState, useEffect } from "react";
import Cart from "./Cart";
import "./Popular.css";
const Popular = () => {
  const [populars, setPopular] = useState();
  const [page, setPage] = useState(1);
  const getPopular = async () => {
    try {
      const reponse = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=43b746b767edc8522cb6200aa1821bcb&page=${page}`
      );
      setPopular(reponse.data.results);
      console.log(reponse.data.results);
    } catch (error) {}
  };
  useEffect(() => {
    getPopular();
  }, [page]);
  return (
    <>
      <div>
        {page > 1 ? (
          <button onClick={() => setPage(page - 1)}>{"<"}</button>
        ) : (
          ""
        )}
        <span>{page}</span>
        <button onClick={() => setPage(page + 1)}>{">"}</button>
      </div>
      <div className="popular_container">
        {populars &&
          populars.map((popular) => <Cart movie={popular} key={popular.id} />)}
      </div>
    </>
  );
};

export default Popular;
