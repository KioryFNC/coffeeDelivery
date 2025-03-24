import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  height: 10.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 16rem;

  @media (max-width: 600px) {
    padding: 1.6rem 5rem;
    margin-bottom: 4rem;
    gap: 1rem;
  }
`



export const Actions = styled.div`
  height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  span {
    display: flex;
    align-items: center;
    gap: .4rem;
    padding: .8rem;
    font-size: 1.4rem;
    color: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    background: ${(props) => props.theme['purple-light']};
    
    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
  :nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .8rem;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-light']};
    transition: transform .2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  }

  @media (max-width: 600px) {
    span {
      font-size: 1.2rem;
    }

  }
`

export const CartBadge = styled.span`
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem !important;
  font-size: 1.2rem !important;
  font-weight: 700;
  border-radius: 50% !important;
  color: white !important;
  background: ${(props) => props.theme['yellow-dark']} !important;
  cursor: pointer;
`