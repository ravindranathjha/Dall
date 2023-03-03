import React from "react";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <header
        className="w-full flex justify-between items-center
  bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]"
      >
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <main
        className="sm:p-8 px-4 py-8
  w-full bg-[#f9fafe] min-h-screen"
      >

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      <footer className="w-full flex justify-center items-center bg-neutral-300 sm:px-8 px-8 py-8 border-b-[#6469ff}">Created By Ravindranath Jha</footer>
    </BrowserRouter>
  );
};

export default App;