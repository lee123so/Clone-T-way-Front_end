import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path ="/" element = {<Main/>}/>
          {/* <Route path ="/post" element = {<AddForm/>}/>
          <Route path ="/detail/:id" element = {<Detail/>}/>
          <Route path ="/addform" element = {<AddForm/>}/>
          <Route path ="/login" element = {<Login/>}/>
          <Route path ="/signin" element = {<Sign/>}/> */}
        </Routes>
    </BrowserRouter>
  );
};

export default Router;