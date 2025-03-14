import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3.2rem;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  > h2 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 130%;
  }
`

export const Address = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 4rem;
  gap: 3.2rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme["base-card"]};

`

export const AddressHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: .8rem;
  > svg {
    width: 2.2rem;
    height: 2.2rem;
  }

  > div h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
  
  > div p {
    font-size: 1.4rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  width: 100%;

  input {
    width: 100%;
    font-size: 1.4rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    padding: 1.2rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['base-button']};
    background: ${(props) => props.theme['base-input']};
  }

  input:nth-child(1) {
    grid-column: span 1;
  }
  
  input:nth-child(2) {
    grid-column: span 3;
  }

  div:nth-of-type(1) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1.2rem;
    grid-column: span 3;
  }

  div:nth-of-type(1) input:nth-child(1) {
    grid-column: span 1;
  }

  div:nth-of-type(1) input:nth-child(2) {
    grid-column: span 1;
  }

  div:nth-of-type(2) {
    display: grid;
    grid-template-columns: 1fr 1fr .3fr;
    gap: 1.2rem;
    grid-column: span 3;
  }

  div:nth-of-type(2) input:nth-child(1) {
    grid-column: span 1;
  }
  div:nth-of-type(2) input:nth-child(2) {
    grid-column: span 1;
  }
  div:nth-of-type(2) input:nth-child(3) {
    grid-column: span 1;
  }
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  padding: 4rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const PaymentHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: .8rem;

  > svg {
    width: 2.2rem;
    height: 2.2rem;
  }

  > div h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
  
  > div p {
    font-size: 1.4rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  width: 100%;

  > button {
    flex: 1;
    height: 5.1rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 1.2rem;
    line-height: 160%;
    white-space: nowrap;
    gap: 1.2rem;
    padding: 1.6rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-button']};
    transition: background 0.2s ease-in-out, transform 0.2s ease-in-out;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }

    &:hover {
      transform: scale(1.05);
      background: ${(props) => props.theme['base-hover']};
    }

    &.active {
      border: 1px solid ${(props) => props.theme['purple']};
      background: ${(props) => props.theme['purple-light']};
    }
  }
`

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ConfirmOrder = styled.div`
  position: relative;
  width: 44.8rem;
  height: 50rem;
  display: flex;
  padding: 4rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-card']};
  overflow: hidden;
`

export const CoffeeList = styled.div`
  flex: 1;
  max-height: 30rem;
  overflow-y: auto;
  padding-right: .8rem;
`

export const CoffeeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  
  &:last-child {
    border-bottom: none;
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
  
  h4 {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .8rem;
  }

  .actions {

    display: flex;
    align-items: center;
    gap: .8rem;
  }

  .price {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }
`

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: .8rem;
  gap: .8rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme["purple"]};
    background: transparent;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover {
      transform: scale(.95);
    }
    
    &:active {
      transform: scale(1.1);
    }
  }

  span {
    font-size: 1.4rem;
    color: ${(props) => props.theme["base-title"]};
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: .8rem;
  border: none;
  border-radius: 6px;
  padding: .8rem 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s;
  color: ${(props) => props.theme["base-text"]};
  background: ${(props) => props.theme["base-button"]};
  transition: transform .2s ease-in-out;

  &:hover {
    transform: scale(.95);
    background: ${(props) => props.theme["base-hover"]};
  }

  &:active {
    transform: scale(1.05);
  }

  svg {
    color: ${(props) => props.theme["purple"]};
    font-size: 1.6rem;
  }
`

export const PriceOrder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  line-height: 130%;
  gap: 1.5rem;

  span {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  height: 4.6rem;
  padding: 1.2rem;
  font-size: 1.4rem;
  line-height: 160%;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  color: ${(props) => props.theme['white']};
  cursor: pointer;
  transition: background 0.2s;
  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme['yellow']};
  transition: transform .2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    background: ${(props) => props.theme['yellow-dark']}
  }

  &:active {
    transform: scale(.95);
  }
`