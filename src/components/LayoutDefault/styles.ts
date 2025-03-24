import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: clamp(2rem, 5vw, 9.4rem) clamp(2rem, 8vw, 16rem);

  @media (max-width: 768px) {
    padding: clamp(2rem, 5vw, 6rem) clamp(2rem, 6vw, 10rem);
  }

  @media (max-width: 600px) {
    padding: clamp(2rem, 4vw, 4rem) clamp(2rem, 5vw, 6rem);
  }

  @media (max-width: 400px) {
    padding: clamp(1rem, 3vw, 2rem) clamp(1rem, 4vw, 4rem);
  }
`