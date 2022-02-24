import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Homepage from "./page/Homepage";
import Schedule from "./page/Schedule";
import Space from "./page/Space";
import Course from "./page/Course";
import Plans from "./page/Plans";

import "../node_modules/bootstrap/dist/js/bootstrap.esm";
import "../src/style/all.css";

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/space" element={<Space />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/course" element={<Course />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
