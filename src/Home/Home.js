import React, { useState, useEffect, useCallback, useRef } from "react";
import { MovieList } from "./MovieList";
import styled from "styled-components/macro";
import axios from "axios";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      console.log(moviePage);
      const response = await axios
        .get(`http://localhost:5000/movies/page/${moviePage}`)
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          console.log(err);
        });

      setMovies((prevArray) => [...prevArray, ...response]);
    };

    fetchMovies();
  }, [moviePage]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      console.log("intersect");
      setMoviePage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "10px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, []);

  return (
    <Container>
      <MovieList loader={loader} movies={movies} />
    </Container>
  );
};

const Container = styled.div`
  margin: 2rem 4rem;
`;
