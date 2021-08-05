import styled from "styled-components";
import { Home } from "./Home";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { Footer } from "./shared/Footer";
import { Navbar } from "./shared/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppContainer>
        <Switch>
          <Home />
        </Switch>
      </AppContainer>
      <Footer />
    </Router>
  );
};

const AppContainer = styled.div`
  background: white;
  position: relative;
  z-index: 1;
  box-shadow: 0rem 5rem 7rem -30px rgba(255, 255, 255, 0.25);
  font: 16px/1.4 system-ui, sans-serif;
  display: flex;
  justify-content: center;
  background-color: #292c33;
  min-height: 100vh;
`;

export default App;
