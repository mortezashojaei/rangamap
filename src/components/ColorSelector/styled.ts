import styled from "styled-components";

export const Container = styled.div``;

export const Circle = styled.div<{ color: string }>`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.color};
  border-radius: 50%;
  cursor: "pointer";
`;

export const Popover = styled.div`
  z-index: 2;
`;
