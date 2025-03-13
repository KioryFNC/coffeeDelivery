import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const Head = styled.div`
  display: flex;
  flex-direction: column;
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
    
    mask: 
      linear-gradient(white, white) content-box,
      linear-gradient(white, white)
    ;
    -webkit-mask: 
      linear-gradient(white, white) content-box,
      linear-gradient(white, white)
    ;
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

  > span > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: .4rem;
  }

  > span > div:nth-child(2) strong {
    display: block;
    font-weight: 800;
  }
  
  > span > div:nth-child(2) span {
    display: block;
  }

  > span:nth-child(1) > div:first-child {
    background: ${(props) => props.theme['purple']}; /* Cor para o primeiro ícone */
  }

  > span:nth-child(2) > div:first-child {
    background: ${(props) => props.theme['yellow']}; /* Cor para o segundo ícone */
  }

  > span:nth-child(3) > div:first-child {
    background: ${(props) => props.theme['yellow-dark']}; /* Cor para o terceiro ícone */
  }
`

export const Image = styled.div`
  width: 49.2rem;
  height: auto;
  align-self: flex-end;
`