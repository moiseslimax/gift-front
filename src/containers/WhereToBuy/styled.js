import styled from 'styled-components';

export const BigText = styled.div`
  align-self: center;
  font-size: 25px;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;


export const BoxContent = styled.div`
  margin: auto;
  font-size: 13px;
  align-content: center;
  justify-content: center;
`;

export const Boxes = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-flow: row wrap;
`;

export const SelectableBox = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  /* border: solid 1px red; */
  background-color: rgb(225, 220, 231);
  height: 80px;
  width: 80px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
  border-radius: 10%;
`;
