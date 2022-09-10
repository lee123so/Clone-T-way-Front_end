import React from "react";
import styled from "styled-components";
import img3_1 from "../../../../assert/booking/03/img3-1.png";
import star from "../../../../assert/booking/star.png";

const Modal = (props) => {
  return (
    <StPassengerForm>
      <TypeFocus onClick={props.onModalHandler}>
        <span>
          <em>성인 1</em>
          <em> : 김/소연</em>
        </span>
      </TypeFocus>

      <PassengerInfoWrap>
        <TopWrap>
          <Top>
            <input type="checkbox" />
            {/* <label> */}
            <Span1> 회원 본인 탑승</Span1>
            {/* </label> */}
            </Top>
            <Span2>은 필수 입력 항목입니다.</Span2>

        </TopWrap>
      </PassengerInfoWrap>

      <Info>
        <table>
          <colgroup></colgroup>
          <tbody>
            <tr>
              <th>
                성별<span></span>
              </th>
              <Td></Td>
            </tr>

            <tr>
              <th>
                국적<span></span>
              </th>
              <Td></Td>
            </tr>

            <tr>
              <th>
                이름<span></span>
              </th>
              <Td></Td>
            </tr>

            <tr>
              <th>
                생년월일<span></span>
              </th>
              <Td></Td>
            </tr>

            <tr>
              <th>
                이메일<span></span>
              </th>
              <Td></Td>
            </tr>

            <tr>
              <th>
                휴대전화<span></span>
              </th>
              <Td></Td>
            </tr>
          </tbody>
        </table>
      </Info>
    </StPassengerForm>
  );
};

export default Modal;

const StPassengerForm = styled.div`
  width: 90%;
  margin-top: 40px;
  margin-left: 60px;
  border: 1px solid #ccc;
  list-style: none;
`;

const TypeFocus = styled.a`
  font-size: 18px;
  color: rgb(26, 26, 26);
  font-weight: 700;
  background-color: rgb(254, 244, 243);
  display: block;
  padding: 30px 40px;
  text-decoration: none;
  cursor: pointer;
  & span {
    display: block;
    background: url(${img3_1}) right top no-repeat;
  }
`;

const PassengerInfoWrap = styled.div`
  display: block;
  padding: 39px 39px;
  box-sizing: border-box;
`;

const TopWrap = styled.div`
  margin-bottom: 10px;
`;

const Top = styled.span`
  float: left;
  display: block;

  & label {
    position: relative;
    display: inline-block;
    margin-right: 15px;
    padding-left: 32px;
    min-height: 22px;
    vertical-align: middle;
    line-height: 1.4;
    cursor: pointer;
  }
`;

const Span1 = styled.span`
  /* width: 22px;
  height: 22px;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 0px;
  margin-top: -11px;
  font-size: 0;
  background: url(//contents-image.twayair.com/homepage/images/ico/ico_checkbox.png)
    no-repeat 0 0; */
`;

const Span2 = styled.span`
  float: right;
  display: inline-block;
  padding-left: 10px;
  font-size: 14px;
  color: #d22c26;
  background: url(//contents-image.twayair.com/homepage/images/customer/bg_required.png)
    no-repeat left 49%;
  vertical-align: middle;
  margin-top: 3px !important;
`;

const Info = styled.div`
  margin-bottom: 60px;

  & table {
    width: 100%;
    border-top: 1px solid #1a1a1a;
  }

  & th {
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
    border-right: 0;
    text-align: left;
    vertical-align: middle;
    border-bottom: 1px solid #e0e0e0;
    padding: 20px 30px;
    font-size: 16px;
    font-weight: normal;
    color: #4d4d4d;
    display: table-cell;
  }

  & span {
    display: inline-block;
    width: 4px;
    height: 4px;
    padding-right: 8px;
    background: url(${star}) no-repeat 0 0;
    text-indent: -9999px;
    font-size: 0;
    vertical-align: middle;
  }
`;

const Td = styled.td`
  position: relative;
  padding: 14px 20px;
  font-size: 16px;
  color: #1a1a1a;
  text-align: left;
  vertical-align: middle;
  border-bottom: 1px solid #e0e0e0;
  display: table-cell;

  & ui {
    float: left;
  }

  & li {
    float: left;
    position: relative;
    display: list-item;
    text-align: -webkit-match-parent;
  }

  & input {
    position: absolute;
    width: 120px;
    height: 46px;
    box-sizing: border-box;
  }

  & label {
    border-left: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
    display: inline-block;
    min-width: 120px;
    height: 46px;
    font-size: 16px;
    color: #4d4d4d;
    text-align: center;
    line-height: 46px;
    border: 1px solid #ccc;
    margin-right: 0;
    padding: 0 10px;
    cursor: pointer;
    box-sizing: border-box;
  }
`;
