import React from "react";
import styled from "styled-components";
import Header2 from "../components/booking/Header2";
import Footer2 from "../components/booking/Footer2";
import BookingTitle2 from "../components/booking/02/BookingTitle2";
import DetailSearchForm from "../components/booking/02/DetailSearchForm";

const DetailSearch = () => {

  return (
    <StDetail>
    <Header2/>
    <BookingTitle2/>
    <DetailSearchForm/>
    <Footer2/>
    </StDetail>
  );

}

export default DetailSearch;

const StDetail = styled.div`
  min-width: 1200px;
  max-width: 1400px;
`;