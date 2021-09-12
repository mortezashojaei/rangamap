import { FC } from "react";
import { ColorSelector } from "..";
import { MapDataPeriodModel } from "../../models";
import { Container } from "./styled";

export type PeriodsType = Array<MapDataPeriodModel>;

type Props = {
  min: number;
  periods: PeriodsType;
  onChange: (value: PeriodsType) => void;
};

export const DataPeriodsInput: FC<Props> = ({ min, periods, onChange }) => {
  const handleChangeColor = (color: string, id: number) => {
    onChange(
      periods.map((item) =>
        item.id === id
          ? {
              ...item,
              color,
            }
          : item
      )
    );
  };
  const handleChangeMax = (max: number, id: number) => {
    onChange(
      periods.map((item) =>
        item.id === id
          ? {
              ...item,
              max,
            }
          : item
      )
    );
  };

  const onAddNewPeriod = () => {
    onChange([
      ...periods,
      {
        id: Math.random() * 1000,
        color: "red",
        max: periods[periods.length - 1].max + 1,
      },
    ]);
  };

  const deleteLastPeriod = (indexToDelete: number) => {
    onChange(periods.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Container>
      {periods.map(({ id, color, max }, index) => (
        <div key={id}>
          <ColorSelector
            value={color}
            onChange={(c) => {
              handleChangeColor(c, id);
            }}
          />
          {index ? periods[index - 1].max : min}-
          <input
            value={max}
            onChange={(e) => handleChangeMax(Number(e.target.value), id)}
          />
          {index && index === periods.length - 1 ? (
            <span onClick={() => deleteLastPeriod(index)}>X</span>
          ) : null}
        </div>
      ))}
      <button onClick={onAddNewPeriod}>اضافه کردن جدید</button>
    </Container>
  );
};
