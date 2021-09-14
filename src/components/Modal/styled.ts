import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
