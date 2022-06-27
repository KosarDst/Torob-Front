import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import SearchResults from "./components/SearchResults";
import ProductInfo from "./components/ProductInfo";
import UserProfile from "./components/UserProfile";

const App = () => {
  /* handle visual height */
  document.documentElement.style.setProperty(
    "--visual-height",
    `${visualViewport.height}px`
  );
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="searchresults" element={<SearchResults />} />
        <Route path="productinfo" element={<ProductInfo />} />
        <Route path="userprofile" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default App;
