// Router
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Home/Index";
import About from "./About/Index";
import Contact from "./Contact/Index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
