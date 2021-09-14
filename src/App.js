import styled from "styled-components";
import "./App.css";
import { Navbar } from "./components/Navbar";

const Container = styled.div`
  height: 100vh;
  background-color: pink;
`;

function App() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}

export default App;
