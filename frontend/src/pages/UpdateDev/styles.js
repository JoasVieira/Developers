import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 96px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #202024;
  border-radius: 4px;

  div {
    img {
      margin-bottom: 16px;
    }
    h1 {
      margin-bottom: 8px;

      font-size: 28px;
    }
    p {
      width: 95%;

      letter-spacing: 0.4px;

      margin-bottom: 8px;
    }
    a {
      text-decoration: none;

      display: flex;
    }
  }

  form {
    width: 50%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 4px;

    input,
    select {
      height: 60px;

      color: #e1e1e6;

      background: #121214;
      border: none;
      border-radius: 6px;

      padding: 0 24px;
    }

    textarea {
      resize: unset;

      color: #e1e1e6;

      background: #121214;
      border: none;
      border-radius: 6px;

      padding: 16px 24px;
    }

    input:nth-child(1),
    input:nth-child(4) {
      grid-column: span 2;
    }

    textarea {
      grid-column: span 3;
    }

    button {
      grid-column: span 3;

      font-size: 16px;
      font-weight: 500;
      color: #e1e1e6;

      background: #41356b;
      border: none;
      border-radius: 6px;

      cursor: pointer;
    }
  }
`
