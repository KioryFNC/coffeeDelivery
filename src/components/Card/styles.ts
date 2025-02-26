import styled from "styled-components";

export const Root = styled.div`
  width: 25.6rem;
  height: 32rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2.4rem 2rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};
`

export const Image = styled.img`
  width: 12rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.6rem;
`
export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1.2rem;
`

export const Tag = styled.span`
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  border-radius: 8px;
  padding: .4rem .8rem;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
`
export const Title = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  line-height: 130%;
  margin-bottom: .8rem;
  color: ${(props) => props.theme['base-subtitle']};
`
export const Description = styled.p`
  text-align: center;
  font-size: 1.4rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
  margin-bottom: 3.3rem;
`
export const Price = styled.span`
  font-size: 1.4rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};
  text-align: right;
  > span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2.4rem;
    font-weight: 800;
  }
`