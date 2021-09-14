import styled from "styled-components";

export const Container = styled.section`
  box-sizing: content-box;
  width: 60%;
  margin: auto;
  border-radius: 1rem;
  background: #889eaf;

  direction: rtl;

  * {
    direction: rtl;
    text-align: right !important;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

export const TableContainer = styled.div`
  display: block;
  overflow: hidden auto;
  border-radius: 1rem;
  max-height: 98vh;
`;

export const StatesTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  position: relative;

  td,
  th {
    text-align: left;
    padding: 1rem 2rem 1rem 0;
    font-size: 16px;

    font-weight: 600;
    input {
      font-size: 16px;
      font-weight: 600;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0);
      border: 0;
      :focus {
        outline-width: 0;
      }
    }
  }
  th {
    font-size: 20px;
    position: sticky;
    top: 0;
    background: #4b6587;
    color: #f0e5cf;
  }

  thead {
    tr {
      height: 4rem;
    }
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;
