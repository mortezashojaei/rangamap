import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import { Dialogues } from "../../Dialogues";
import { useOutsideClick } from "../../hooks";
import { RegionType, RegionValuesModel } from "../../models";
import { AwsomeButton } from "../AwsomeButton";
import { Modal } from "../Modal";
import { RegionsTable, Container, TableContainer } from "./styled";
import { chunk } from "./__helper__";

type Props = {
  regionValues: RegionValuesModel;
  setRegionValues: Dispatch<SetStateAction<RegionValuesModel>>;
  regions: RegionType[];
};

export const RegionValuesInput: FC<Props> = ({
  regionValues,
  setRegionValues,
  regions,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => {
    setIsModalOpen(false);
  });

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    region: string
  ) {
    const value = Number(e.target.value);
    if (isNaN(value)) {
      setRegionValues(regionValues.filter((item) => item.name !== region));
    } else {
      if (regionValues.find((item) => item.name === region)) {
        setRegionValues(
          regionValues.map((item) =>
            item.name === region ? { name: region, value } : item
          )
        );
      } else {
        setRegionValues([...regionValues, { name: region, value }]);
      }
    }
  }

  return (
    <>
      <AwsomeButton
        style={{ width: "100%" }}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        {Dialogues.CHANGE_STATE_VALUES}
      </AwsomeButton>
      {isModalOpen && (
        <Modal>
          <Container>
            <TableContainer ref={ref}>
              <RegionsTable>
                <thead>
                  <tr>
                    <th>{Dialogues.REGION}</th>
                    <th>{Dialogues.VALUE}</th>
                    <th>{Dialogues.REGION}</th>
                    <th>{Dialogues.VALUE}</th>
                    <th>{Dialogues.REGION}</th>
                    <th>{Dialogues.VALUE}</th>
                  </tr>
                </thead>
                <tbody>
                  {chunk<RegionType>(regions, 3).map((array, index) => (
                    <tr key={index}>
                      {array.map((region) => (
                        <>
                          <td>{region.persianName}</td>
                          <td>
                            <input
                              onChange={(e) =>
                                handleInputChange(e, region.name)
                              }
                              value={
                                regionValues.find(
                                  (item) => item.name === region.name
                                )?.value || ""
                              }
                            />
                          </td>
                        </>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </RegionsTable>
            </TableContainer>
          </Container>
        </Modal>
      )}
    </>
  );
};
