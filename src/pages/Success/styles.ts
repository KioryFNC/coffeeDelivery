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
    font-size: 1.6rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};

    strong {
      font-weight: 700;
    }

    span {
      display: block;
    }
  }
`

export const Image = styled.div`
  width: 49.2rem;
  height: auto;
  align-self: flex-end;
`