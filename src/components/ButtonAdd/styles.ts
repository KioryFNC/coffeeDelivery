import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  height: 38px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
`

export const Button = styled.button`
  width: 1.4rem;
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme['purple']}; 
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: .95;
  }
`

export const Quantity = styled.span`
  font-size: 1.6rem;
  color: ${(props) => props.theme['base-title']};
`;