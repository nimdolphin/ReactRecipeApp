import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import NotFound from "../../pages/NotFound";
import Category from "../../pages/Category";
import Recipe from "../../pages/Recipe";

const Main = () => {
  return (
    <>
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="category/:name" element={<Category />} />
          <Route path="meal/:mealId" element={<Recipe />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
