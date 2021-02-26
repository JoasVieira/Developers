import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 96px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 32px;

  background: #202024;
  border-radius: 4px;

  section {
    h1 {
      margin-bottom: 8px;

      font-size: 28px;
    }
    p {
      width: 95%;

      letter-spacing: 0.4px;
    }
  }

  div {
    grid-area: 1/2/2 span;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
