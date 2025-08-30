import {  Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import Contact from "./Contact";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<About/>} />
          <Route path="home" element={<Home/>} />
          <Route path="Courses" element={<Courses/>} />
          <Route path="Contact" element={<Contact/>} />
        </Route>
      </Routes>
  );
}
