import styled from "styled-components";

export const Root = styled.div`
  width: 25.6rem;
  height: 32rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Image = styled.img`
  width: 12rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .4rem .8rem;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 8px;
`
export const Tag = styled.span`
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-dark']};
`
export const Title = styled.h3``
export const Description = styled.p``
export const Price = styled.span``