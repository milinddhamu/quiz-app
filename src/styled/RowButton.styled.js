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
        padding: 0.8rem 0;
        border-radius: 0.8rem;
        border: none;
      `;
    case "background2":
      return `
        background-color: #ffffff;
        padding: 0.7rem 0;
        border-radius: 0.8rem;
        border: 2px solid green;
      `;
    case "background3":
      return `
        background-color: #E9F7F0;
        padding: 0.8rem 0;
        border-radius: 0.8rem;
        border: none;
      `;
    case "background4":
      return `
        background-color: #FFE8E9;
        padding: 0.8rem 0;
        border-radius: 0.8rem;
        border: none;
      `;

  }
}

export const RowButton = styled.button`
  display:flex;
  width:100%;
  flex-direction:row;
  gap:1rem;
  &:hover {
    cursor:pointer;
    }
  
  ${props => applyAlignmentAndJustification(props.$align, props.$justify)}
  ${props => applyBackgroundStyles(props.$backgroundStyle) || ""}
  ${props => props.$Disabled && `
    pointer-events: none;
    cursor: not-allowed;
  `}
  
`