import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import LinkContainer from 'react-router-bootstrap/LinkContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>amazona</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={ <HomeScreen /> } />
              <Route path="/product/:slug" element={ <ProductScreen /> } />
            </Routes>
          </Container>
        </main>
        <footer className="text-center">
          <div>All rights reserverd</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
