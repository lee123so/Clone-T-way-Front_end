import React from "react";
import styled from "styled-components";
import step01 from "../../../assert/booking/step01.png";
import step02_2 from "../../../assert/booking/step02_2.png";
import step03 from "../../../assert/booking/step03.png";

const BookingTitle2 = () => {

  return (
    <StBookingTitle>
    <div>
    <h1>항공권 예매</h1>
    </div>
    <Step>
        <Step01>
          <span><label>01 여정 검색</label></span>
        </Step01>
        <Step02>
          <span><label>02 여정 선택</label></span>
        </Step02>
        <Step03>
          <span><label>03 탑승자 정보</label></span>
        </Step03>
    </Step>
    </StBookingTitle>
  );

}

export default BookingTitle2;

const StBookingTitle = styled.div`
  display: flex;
  margin: 30px 60px;
  gap: 550px;
  align-items: center;

  & h1 {
    margin-left: 30px;
  }
`;

const Step = styled.div`
  display: flex;
  & li {
    margin-left: -26px;
  }
`;

const Step01 = styled.span`
  background-image: url(${step01});
  background-repeat: no-repeat;
  height:30px;

  & span {
    float: left;
    padding-top: 35px;
    width: 120px;
    height: 50px;
    font-size: 13px;
    text-align: center;
    letter-spacing: -1px;
    background-repeat: no-repeat;
    background-position: 2px -2px;
    box-sizing: border-box;
    color: rgb(128, 128, 128);
    color: rgb(210, 44, 38);
  }
`;

const Step02 = styled.span`
  background-image: url(${step02_2});
  background-repeat: no-repeat;
  height:30px;

  & span {
    float: left;
    padding-top: 35px;
    width: 120px;
    height: 50px;
    font-size: 13px;
    text-align: center;
    letter-spacing: -1px;
    background-repeat: no-repeat;
    background-position: 2px -2px;
    box-sizing: border-box;
    /* color: rgb(128, 128, 128); */
    color: rgb(210, 44, 38);
  }
`;

const Step03 = styled.span`
  background-image: url(${step03});
  background-repeat: no-repeat;
  height:30px;

  & span {
    float: left;
    padding-top: 35px;
    width: 120px;
    height: 50px;
    font-size: 13px;
    text-align: center;
    letter-spacing: -1px;
    background-repeat: no-repeat;
    background-position: 2px -2px;
    box-sizing: border-box;
    color: rgb(128, 128, 128);
    /* color: rgb(210, 44, 38); */
  }
`;