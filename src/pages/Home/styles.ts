import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  height: 100%;
`

export const Banner = styled.div`
  height: 36rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.6rem;
  margin-bottom: 9.2rem;
`

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 7.15rem;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  h1 {
    font-size: 4.8rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
  p{
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 4rem;
    }
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 2rem 4rem;
  
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    gap: 1.2rem;
    line-height: 130%;
    flex-wrap: nowrap;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }

    &:nth-child(1) div{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .8rem;
      border-radius: 50%;
      background: ${(props) => props.theme['yellow-dark']};
    }

    &:nth-child(2) div{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .8rem;
      border-radius: 50%;
      background: ${(props) => props.theme['base-text']};
    }

    &:nth-child(3) div{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .8rem;
      border-radius: 50%;
      background: ${(props) => props.theme['yellow']};
    }

    &:nth-child(4) div{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .8rem;
      border-radius: 50%;
      background: ${(props) => props.theme['purple']};
    }
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5.4rem;
  margin-top: 3.2rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.2rem;
  justify-content: start;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 8rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 4rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 2rem;
  }
`