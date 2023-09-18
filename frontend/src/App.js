import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazona</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={ <HomeScreen /> } />
            <Route path="/product/:slug" element={ <ProductScreen /> } />
          </Routes>
          
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
