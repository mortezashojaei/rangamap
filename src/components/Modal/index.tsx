import React from "react";
import ReactDOM from "react-dom";
import { Container } from "./styled";

export const Modal: React.ForwardRefExoticComponent<
  React.PropsWithChildren<React.RefAttributes<HTMLDivElement>>
> = React.forwardRef(({ children }, ref) => {
  const root = document.getElementById("modal");
  if (root === null) return null;
  return ReactDOM.createPortal(
    <Container ref={ref}>{children}</Container>,
    root
  );
});
