import { FC, useRef, useState } from "react";
import { ColorChangeHandler, SketchPicker } from "react-color";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Circle, Container, Popover } from "./styled";

type Props = {
  value?: string;
  onChange: (color: string) => void;
};

export const ColorSelector: FC<Props> = ({ value = "red", onChange }) => {
  const [showPalette, setShowPalette] = useState(false);
  const handleChange: ColorChangeHandler = ({ hex }) => onChange(hex);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => {
    setShowPalette(false);
  });
  return (
    <Container>
      <Circle
        onClick={() => {
          setShowPalette(true);
        }}
        color={value}
      />
      {showPalette ? (
        <Popover ref={ref}>
          <SketchPicker color={value} onChange={handleChange} />
        </Popover>
      ) : null}
    </Container>
  );
};
