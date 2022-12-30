import React from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { Input } from "antd";
import { useState } from "react";
const { Search } = Input;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async (searchText) => {
    await axios
      .get("/api/v1/search/movie.json", {
        params: { query: `${searchText}` },
        headers: {
          "X-Naver-Client-Id": process.env.REACT_APP_NAVER_ID,
          "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_SECRET,
        },
      })
      .then((response) => {
        setMovies(response.data.items);
        console.log(response.data.items);
      });
  };
  //   const getMovies = async (searchText) => {
  //     try {
  //       const response = await axios.get("/api/v1/search/movie.json");
  //     } catch {}
  // await axios
  //   .get("/api/v1/search/movie.json", {
  //     params: { query: `${searchText}` },
  //     headers: {
  //       "X-Naver-Client-Id": process.env.REACT_APP_NAVER_ID,
  //       "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_SECRET,
  //     },
  //   })
  //   .then((response) => {
  //     console.log(response.data.items);
  //   });
  //   };
  return (
    <div>
      <div>Hello Movie</div>
      <Search
        placeholder="input search text"
        onSearch={(searchText) => getMovies(searchText)}
        style={{ width: 200 }}
      />
      {movies.length === 0 ? (
        <h1>찾으시는 제목의 영화가 없습니다.</h1>
      ) : (
        movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })
      )}
    </div>
  );
};

export default Home;
