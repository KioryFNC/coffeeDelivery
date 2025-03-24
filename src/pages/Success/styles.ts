import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  padding: 2rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 5rem;
  }

  @media (max-width: 768px) {
    gap: 3rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3.2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }

  > span {
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    span {
      font-size: 1.6rem;
    }
  }
`

export const Details = styled.div`
  position: relative;
  width: 52.6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  padding: 4rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['background']};
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: 6px 36px;
    background: linear-gradient(90deg, #DBAC2C 0%, #8047F8 100%);
    mask: linear-gradient(white, white) content-box, linear-gradient(white, white);
    -webkit-mask: linear-gradient(white, white) content-box, linear-gradient(white, white);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  > span {
    display: flex;
    align-items: flex-start;
    line-height: 130%;
    gap: 1.2rem;
    font-size: 1.6rem;
    color: ${(props) => props.theme['base-text']};
  }

  > span > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .8rem;
    border-radius: 50%;
  }

  > span > div:nth-child(2) strong {
    font-weight: 800;
  }
  
  > span > div:nth-child(2) span {
    display: block;
  }

  > span:nth-child(1) > div:first-child {
    background: ${(props) => props.theme['purple']};
  }

  > span:nth-child(2) > div:first-child {
    background: ${(props) => props.theme['yellow']};
  }

  > span:nth-child(3) > div:first-child {
    background: ${(props) => props.theme['yellow-dark']};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1.5rem;
  }
`

export const Image = styled.div`
  width: 49.2rem;
  height: auto;
  align-self: flex-end;

  @media (max-width: 1200px) {
    align-self: center;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    img {

      width: 100%;
    }
  }
`
