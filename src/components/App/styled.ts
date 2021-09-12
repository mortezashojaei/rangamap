import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background: #c8c6c6;

  * {
    direction: rtl;
  }

  .map {
    align-self: center;
    width: 100%;
    height: 100vh;

    *:hover {
      fill: black;
    }
  }

  .side-bar {
    width: 30vw;
    background: #4b6587;
    border-radius: 5rem 0 0 5rem;
    box-shadow: rgba(50, 50, 93, 0.55) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.6) 0px 30px 60px -30px;
  }
`;
