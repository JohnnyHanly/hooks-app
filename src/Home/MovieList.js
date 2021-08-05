import React, { useState, useRef } from "react";
import styled from "styled-components/macro";
import { MovieCard } from "./MovieCard";
import { MovieDetailsModal } from "./MovieDetailsModal";
import { LoadMore } from "./LoadMore";
export const MovieList = ({ movies, fetchMovies, loader }) => {
  const [selectedMovie, setSelectedMovie] = useState();

  const [modalVisible, toggleModalVisible] = useState();

  const handleMovieCardOnClick = (movie) => {
    console.log(`setting movie: ${movie.title}`);
    setSelectedMovie(movie);
    toggleModalVisible(!modalVisible);
  };

  const handleModalBorderClick = () => {
    console.log("toggling modal");
    toggleModalVisible(!modalVisible);
  };

  return (
    <Container>
      <MovieGrid>
        {movies &&
          movies.map((movie) => (
            <MovieCard movie={movie} onClick={handleMovieCardOnClick} />
          ))}
      </MovieGrid>
      <div ref={loader}></div>
      {modalVisible ? (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalBorderClick}
        />
      ) : null}
    </Container>
  );
};

const MovieGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 1rem;
`;

const Container = styled.div`
  border: 2px solid transparent;
  box-shadow: 0 0px 10px rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  margin-left: 0px;
  background-color: #1e2126;
`;
