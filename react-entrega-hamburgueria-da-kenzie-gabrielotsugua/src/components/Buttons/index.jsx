import styled from "styled-components";

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
  color: var(--color-gray-2);
  font-size: 10px;
  position: absolute;
  bottom: 5px;
  right: 10px;
  cursor: pointer;
`

export const RemoveAllButton = styled.button`
  background-color: var(--color-gray-3);
  color: var(--color-gray-0);
  font-size: var(--caption);
  font-weight: bold;
  border-radius: 5px;
  border: none;
  width: 100%;
  padding: 10px;
  margin-top: 17px;
  cursor: pointer;
`