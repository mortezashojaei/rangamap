import { FC } from "react";
import { StyledButton } from "./styled";

type Props = {
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const AwsomeButton: FC<Props> = ({ children, onClick, style }) => {
  return (
    <StyledButton style={style} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
