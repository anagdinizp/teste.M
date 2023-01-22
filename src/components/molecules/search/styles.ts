import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchInput = styled.input`
  outline: none;
  background: #ffffff;
  border: 1px solid #e1e0e7;
  border-radius: 8px;
  margin-right: -10px;
  padding: 10px;
  margin-bottom: 30px;
  ::placeholder {
    color: #acacac;
    letter-spacing: -0.005em;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const SearchButton = styled.button`
  background-color: #0047bb;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  margin-bottom: 30px;
`;
