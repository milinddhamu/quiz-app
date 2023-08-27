import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${a=> a.$GradientBG && `background: linear-gradient(to top, #ffffff, var(--senary-color));
  background-attachment: fixed;`}
  ${a=> a.$GradientMain && `background: linear-gradient(to bottom, #ffffff, var(--senary-color));
  background-attachment: fixed;`}
`