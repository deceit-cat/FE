// Loading.jsx
import React from 'react';
import styled from 'styled-components';
import Loading from './public/assets/Loading.gif';

export const Loading = () => {
    return(
        <Background>
            <LoadingText>잠시만 기다려 주세요.</LoadingText>
            <img src={Loading} alt="로딩중" width="5%" />
        </Background>
    );
}

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffff;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
`;