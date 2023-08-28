import styled from "styled-components";

const applyAlignmentAndJustification = (align, justify) => {
  let css = "";

  switch (align) {
    case "start":
      css += "align-items: flex-start;";
      break;
    case "end":
      css += "align-items: baseline;";
      break;
    case "center":
      css += "align-items: center;";
      break;
    // You can add more cases for other alignment values if needed

    default:
      break;
  }

  switch (justify) {
    case "start":
      css += "justify-content: flex-start;";
      break;
    case "end":
      css += "justify-content: flex-end;";
      break;
    case "center":
      css += "justify-content: center;";
      break;
    case "between":
      css += "justify-content: space-between;";
      break;
    // You can add more cases for other justification values if needed

    default:
      break;
  }

  return css;
};

const applyBackgroundStyles = (backgroundType) => {
  switch (backgroundType) {
    case "background1":
      return `
        background-color: #F3F4FA;
        padding: 1.4rem 0;
        border-radius: 0.8rem;
        border: none;
      `;
    case "background2":
      return `
        background-color: #ffffff;
        padding: 1.3rem 0;
        border-radius: 0.8rem;
        border: 2px solid green;
      `;

      }
     }

export const RowButton = styled.button`
  display:flex;
  width:100%;
  flex-direction:row;

  &:hover {
    cursor:pointer;
    }

  ${props => applyAlignmentAndJustification(props.$align, props.$justify)}
  ${props => applyBackgroundStyles(props.$backgroundStyle) || ""}
`