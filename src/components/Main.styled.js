import styled from "styled-components";

const bodyBackground = (bg) => {
  switch (bg) {
    case 'bottomBG':
      return `
      background: linear-gradient(to bottom, #ffffff, var(--senary-color));`
    case 'topBG':
      return `
      background: linear-gradient(to top, #ffffff, var(--senary-color));`
    default:
      return
  }
}

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props => bodyBackground(props.$background)}
`