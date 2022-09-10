import React from "react";
import styled from "styled-components";
import logo from "../../assert//booking/logo.png";
import logoBar from "../../assert//booking/logobar.png";

const Header2 = () => {

  return (
    <StHeader2>
      <div>
        <a href="/">
          <h1>t'way</h1>
        </a>
      </div>
    </StHeader2>
  );
};

export default Header2;

const StHeader2 = styled.div`
  width: 100%;
  height: 85px;
  background-image: url(${logoBar});
  background-color: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-position: 100% 0px;
  border-bottom: 1px solid rgb(227, 227, 227);
  
  & a {
    color: rgb(49, 49, 49);
    text-decoration: none;
    cursor: pointer;
    float: left;
  }
  & h1 {
    cursor: pointer;
    text-indent: -9999px;
    margin-top: 25px;
    margin-left: 30px ;
    width: 75px ;
    height: 30px ;
    background: url(${logo}); 
  }
`;
