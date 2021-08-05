import React from "react";
import styled from "styled-components/macro";
export const LoadMore = ({ fetchMovies }) => {
  const onLoadMorePressed = () => {
    fetchMovies();
  };
  return <LoadMoreButton onClick={onLoadMorePressed}>Load More</LoadMoreButton>;
};

const LoadMoreButton = styled.button`
  padding: 0.5rem 2.5rem;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  border: 2px solid transparent;
  font-size: 1rem;
  border-radius: 0.25rem;
  :hover {
    cursor: pointer;
    filter: brightness(85%);
  }
`;
