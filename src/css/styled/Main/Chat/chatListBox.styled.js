import styled from "styled-components"

export const Container = styled.div`
  min-width: 250px;
  width: 100%;
  // 콘텐츠 크기에 맞게끔 높이는 최대한 작게
  height: 11vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* vertical - horizontal */
  padding: 2vh 2vw;
  /* vertical - horizontal */
  margin: 0.6vh 0;
  color: var(--bg-dark-gray);
  border-radius: 10px;
  background-color: white;

  &:hover {
      color: var(--bg-black);
      text-shadow: 2px 2px 5px var(--bg-beige);
      cursor: pointer;
  }
`;

export const ImgContainer = styled.div`
    overflow: hiddden;
    width: 55px;
    height: 55px;
    border-radius: 10%;
    margin-right: 7px;
    overflow: hidden;
`;

export const NameAndContentContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // 최대한 왼쪽에 붙도록
    align-items: start;
`;

export const DateContainer = styled.div`
    flex: 1;
    margin-top: 4px;
    display: flex;
    padding-right: 5px;
    justify-content: end;
`;