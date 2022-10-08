import { React, StrictMode } from "react";
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { render, ReactDOM } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
