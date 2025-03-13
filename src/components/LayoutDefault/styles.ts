import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 9.4rem 16rem 16rem 16rem;

  @media (max-width: 768px) {
    padding: 6rem 10rem 10rem 10rem;
  }
  @media (max-width: 600px) {
    padding: 5rem 8rem 8rem 8rem;
  }
  @media (max-width: 400px) {
    padding: 4rem 6rem 6rem 6rem;
  }
`