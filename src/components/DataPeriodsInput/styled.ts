import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form-field {
    display: block;
    direction: ltr;
    text-align: center;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
    border-radius: 6px;
    -webkit-appearance: none;
    color: #848c9f;
    border: 1px solid #cdd9ed;
    background: #fff;
    transition: border 0.3s ease;
    &::placeholder {
      color: #cbd1dc;
    }
    &:focus {
      outline: none;
      border-color: #275efe;
    }
  }

  .form-group {
    position: relative;
    display: flex;
    width: 15rem;
    & > span,
    .form-field {
      white-space: nowrap;
      display: block;
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
      &:first-child {
        border-radius: 0 6px 6px 0;
      }
      &:last-child {
        border-radius: 6px 0 0 6px;
      }
      &:not(:first-child) {
        margin-left: -1px;
      }
    }
    .form-field {
      position: relative;
      z-index: 1;
      flex: 1 1 auto;
      width: 6rem;
      margin-top: 0;
      margin-bottom: 0;
    }
    & > span {
      text-align: center;
      padding: 8px 0.6rem;
      width: 6rem;
      font-size: 14px;
      line-height: 25px;
      color: #99a3ba;
      background: #cdd9ed;
      border: 1px solid #cdd9ed;
      transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
    }
    &:focus-within {
      & > span {
        color: #fff;
        background: #678efe;
        border-color: #275efe;
      }
    }
  }

  button {
    cursor: pointer;
    padding: 0.4rem 3rem;
    font-weight: 600;
  }
`;

export const PeriodContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1.4rem;
  width: 100%;

  .form-group {
    margin-left: 1rem;
  }

  .close {
    padding: 0 0.6rem;
    cursor: pointer;
  }
`;
