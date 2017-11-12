import styled from 'styled-components';

export const TopBar = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 5.2rem;
  line-height: 5.2rem;
  padding: 0px 1.6rem;
  background: #7B4BFF;
  h1 {
    margin: 0;
    font-size: 2rem;
    color: white;
  }
`;

export const Content = styled.div`
  padding: 0;
  min-height: calc(100vh - 5.2rem);
  background: #352357;
  background-image: linear-gradient(-180deg, #1C2344 0%, #352357 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
`;