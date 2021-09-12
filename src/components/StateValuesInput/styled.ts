import styled from "styled-components";
import { Modal } from "../Modal";

export const StyledModal = styled(Modal)`
  padding: 20%;
`;

export const StatesTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;
