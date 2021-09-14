import styled from "styled-components";

export const Container = styled.div``;

export const Cover = styled.div`
  position: fixed;
`;

export const Circle = styled.div<{ color: string }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${(props) => props.color};
  cursor: pointer;
`;

export const Popover = styled.div`
  z-index: 1000;
  position: absolute;
`;
