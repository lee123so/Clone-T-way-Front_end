import React from "react";
import styled from "styled-components";
import BookingTitle1 from "../components/booking/01/BookingTitle1";
import Option from "../components/booking/01/Option";
import SearchForm from "../components/booking/01/SearchForm";
import Header2 from "../components/booking/Header2";
import Footer2 from "../components/booking/Footer2";

const Ticket = () => {
  return (
    <StTicket>
      <Header2 />
      <BookingTitle1 />
      <Option />
      <SearchForm />
      <Footer2 />
    </StTicket>
  );
};

export default Ticket;

const StTicket = styled.div`
  min-width: 1200px;
  max-width: 1400px;
`;
