import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}
@media(max-width: 1080px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: rgb(18, 18, 20);
  color: #f1f1f6;
}

body, input, textarea, button {
  font: 400 1rem "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

 li {
  list-style: none;
  display: inline-block;

  margin: 0 6px;
}
`

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`
