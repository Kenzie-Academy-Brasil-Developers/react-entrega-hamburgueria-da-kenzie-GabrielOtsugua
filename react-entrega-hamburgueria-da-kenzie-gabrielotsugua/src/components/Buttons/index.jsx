import styled from "styled-components";

export const SearchButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: var(--color-gray-3);
  color: var(--color-gray-0);
  font-weight: bold;
  font-size: var(--caption);
  position: absolute;
  top: 7px;
  right: 7px;
  cursor: pointer;
`

export const GreenButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: var(--color-primary);
  color: var(--color-gray-0);
  font-weight: bold;
  font-size: var(--caption);
  position: absolute;
  bottom: 11px;
  left: 0;
  cursor: pointer;
`

export const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  color: var(--color-gray-3);
  font-size: 10px;
  position: absolute;
  bottom: 5px;
  right: 10px;
  cursor: pointer;
`