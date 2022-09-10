import React from "react";
import styled from "styled-components";
import Header2 from "../components/booking/Header2.jsx";
import Footer2 from "../components/booking/Footer2.jsx";
import BookingTitle3 from "../components/booking/03/BookingTitle3.jsx";
import PassengerInfo from "../components/booking/03/PassengerInfo.jsx";
import PassengerForm from "../components/booking/03/PassengerForm.jsx";

const Passenger = () => {
  return (
    <StPassenger>
      <Header2 />
      <BookingTitle3 />
      <PassengerInfo />
      <PassengerForm />
      <Footer2 />
    </StPassenger>
  );
};

export default Passenger;

const StPassenger = styled.div`
  min-width: 1200px;
  max-width: 1400px;
`;
