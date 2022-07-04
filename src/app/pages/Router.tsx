// Router
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Home/Index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
