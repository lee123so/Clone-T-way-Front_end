import React from 'react'
import styled from 'styled-components'

const Container = () => {
    return (
        <StService>
            <StTitle>
                <h1>부가서비스</h1>
            </StTitle>
            <div>
                <StServiceBox>
                    <StBox><img src="https://contents-image.twayair.com/homepage/images/main/img_srv01.png" alt="" />
                        <p>부가서비스번들</p>
                    </StBox>
                    <StBox><img src="https://contents-image.twayair.com/homepage/images/main/img_srv02.png" alt="" />
                        <p>수하물 추가구매</p>
                    </StBox>
                    <StBox><img src="https://contents-image.twayair.com/homepage/images/main/img_srv03.png" alt="" />
                        <p>사전좌석구매</p></StBox>
                    <StBox><img src="https://contents-image.twayair.com/homepage/images/main/img_srv04.png" alt="" />
                        <p>기내식 사전주문</p></StBox>
                    <StBox><img src="https://contents-image.twayair.com/homepage/images/main/img_srv05.png" alt="" />
                        <p>면세품 & t`shop</p></StBox>
                    <StBox><img src="https://contents-image.twayair.com/homepage/images/main/img_srv07.png" alt="" />
                        <p>원클릭 여행보험</p>
                    </StBox>
                </StServiceBox>
            </div>
        </StService>
    )
}

export default Container

const StService = styled.div`
    width: 100%;
    padding: 50px 0;
`
const StTitle = styled.div`
    width: 1200px;
    margin: 0 auto;
    text-align: center;
`
const StServiceBox = styled.ul`
    width: 1200px;
    margin:  0 auto;
    display: flex;
    justify-content: space-between;
    list-style:none;
    position: relative;
`
const StBox = styled.li`
    width: 180px;
    height: 200px;
    background-color: #f3f3f3;
    text-align: center;
    transition: height 0.2s ease-out, top 0.2s ease-out, left 0.2s ease-out;
    :hover{
        height: 245px;
        background-color: #d22c26;
        color: #fff;
    }
  
`
