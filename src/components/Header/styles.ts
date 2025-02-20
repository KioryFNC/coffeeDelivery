import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  height: 10.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 16rem;
`

export const Logo = styled.div`
  display: flex;
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
    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`