import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import { Dialogues } from "../../Dialogues";
import { useOutsideClick } from "../../hooks";
import { StateValuesModel } from "../../models";
import { states } from "../Maps/states";
import { StatesTable, StyledModal } from "./styled";

type Props = {
  stateValues: StateValuesModel;
  setStateValues: Dispatch<SetStateAction<StateValuesModel>>;
};

export const StateValuesInput: FC<Props> = ({
  stateValues,
  setStateValues,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => {
    setIsModalOpen(false);
  });

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    state: string
  ) {
    const value = Number(e.target.value);
    if (isNaN(value)) {
      setStateValues(stateValues.filter((item) => item.state !== state));
    } else {
      if (stateValues.find((item) => item.state === state)) {
        setStateValues(
          stateValues.map((item) =>
            item.state === state ? { state, value } : item
          )
        );
      } else {
        setStateValues([...stateValues, { state, value }]);
      }
    }
  }

  return (
    <>
      <div
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        {Dialogues.CHANGE_STATE_VALUES}
      </div>
      {isModalOpen && (
        <StyledModal ref={ref}>
          <StatesTable>
            <thead>
              <tr>
                <th>{Dialogues.STATE}</th>
                <th>{Dialogues.VALUE}</th>
              </tr>
            </thead>
            <tbody>
              {states.map((state) => (
                <tr key={state.name}>
                  <td>{state.persianName}</td>
                  <td>
                    <input
                      onChange={(e) => handleInputChange(e, state.name)}
                      value={
                        stateValues.find((item) => item.state === state.name)
                          ?.value || ""
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </StatesTable>
        </StyledModal>
      )}
    </>
  );
};
