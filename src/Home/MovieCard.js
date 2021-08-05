import styled from "styled-components/macro";
import placeholderPoster from "../assets/images/placeholder-poster.png";

export const MovieCard = ({ movie, onClick }) => {
  return (
    <CardContainer onClick={() => onClick(movie)}>
      <Poster
        src={movie.poster ? movie.poster : placeholderPoster}
        alt={`${movie.title} poster`}
        onError={(event) => (event.target.src = placeholderPoster)}
      ></Poster>

      <MovieDetailsContainer>
        <MovieHeader>
          <MovieTitle>{movie.title}</MovieTitle>
        </MovieHeader>
        <MovieSubHeaderList>
          <MovieSubHeaderItem>{movie.year}</MovieSubHeaderItem>
          <MovieSubHeaderItem>{movie.runtime}</MovieSubHeaderItem>
        </MovieSubHeaderList>
      </MovieDetailsContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 2px solid #2b2b2b;
  border-radius: 4px;
  padding: 0.25rem;
  :hover {
    cursor: pointer;
    box-shadow: 0 8px 25px 0 rgba(255, 255, 255, 0.2);
  }
`;

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e7e7e7;
  width: 100%;
  background-color: whitesmoke;
`;
const MovieHeader = styled.div``;
const MovieSubHeaderList = styled.ul`
  list-style: none;
`;

const MovieSubHeaderItem = styled.li`
  display: inline;
  letter-spacing: 0.05rem;
  white-space: nowrap;
`;

const MovieAbout = styled.div``;

const Poster = styled.img`
  border: 0;
  width: 100%;
  height: auto;
`;
const MovieTitle = styled.h3`
  margin: 1%;
  font-size: 1.25rem;
  line-height: 1.6;
`;
