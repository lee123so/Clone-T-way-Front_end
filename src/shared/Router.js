import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Search from "../pages/Search";
import DetailSearch from "../pages/DetailSearch";
import Passenger from "../pages/Passenger";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path ="/" element = {<Main/>}/>
          <Route path ="/signUp" element = {<SignUp/>}/>
          <Route path ="/login" element = {<Login/>}/>
          <Route path ="/search" element = {<Search/>}/>
          <Route path ="/detail" element = {<DetailSearch/>}/>
          <Route path ="/passenger" element = {<Passenger/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default Router;