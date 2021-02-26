import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;

    svg {
      margin-left: 12px;
    }
  }
`

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  h1 {
    margin: 24px 0;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;

    li {
      display: grid;
      grid-gap: 16px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;

      padding: 24px 32px;

      background: #202024;
      border-radius: 4px;

      list-style: none;

      div {
        display: flex;

        svg {
          cursor: pointer;
          margin-left: 4px;
        }
      }

      div:nth-child(5),
      div:nth-child(6) {
        grid-column: 2 span;
      }

      div:nth-child(6) {
        justify-content: flex-end;
      }

      strong {
        color: #8257e6;
        margin-right: 4px;
      }
    }
  }
`

export const Footer = styled.footer`
  padding: 16px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  ul li,
  svg {
    cursor: pointer;
  }
`
