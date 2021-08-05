import styled from "styled-components/macro";
import placeholderPoster from "../assets/images/placeholder-poster.png";
export const MovieDetailsModal = ({ movie, onClose }) => {
  console.log(movie);
  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(event) => event.stopPropagation()}>
        <MovieContent>
          <MovieContentLeft>
            <div>{movie.title}</div>
            <div>{movie.fullplot}</div>
          </MovieContentLeft>
          <MovieContentRight>
            <ModalPoster
              src={movie.poster ? movie.poster : placeholderPoster}
            />
          </MovieContentRight>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </MovieContent>
      </ModalContainer>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  width: 100vw;
  background-color: green;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  z-index: 1;
  position: fixed;
  width: 60%;
  height: 90%;
  overflow-y: scroll;
  border: 2px solid white;
  border-radius: 4px;
`;

const ModalPoster = styled.img`
  width: 100%;
  height: auto;
`;

const MovieContent = styled.div`
  background-color: #fefefe;
  padding: 20px;

  padding: 0px;
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: stretch;
`;

const MovieContentLeft = styled.div`
  background-color: #fefefe;
  padding: 20px;

  padding: 0px;
`;
const MovieContentRight = styled.div`
  background-color: #fefefe;
  padding: 20px;

  padding: 0px;
`;
