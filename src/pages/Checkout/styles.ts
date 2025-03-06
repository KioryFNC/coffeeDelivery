import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  align-items: center;
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
  border-radius: 6px;
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
    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-button']};

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`


export const Order = styled.div`

`
export const ConfirmOrder = styled.div`

`
export const CardDetails = styled.div`

`
export const PriceOrder = styled.div`

`
