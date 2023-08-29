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

export const Row = styled.div`
  display:flex;
  width:100%;
  flex-direction:row;
  ${props => applyAlignmentAndJustification(props.$align, props.$justify)}
  ${props=> props.$Background && `background-color:#F3F4FA;
    padding:1.4rem 0;
    border-radius:0.8rem;  
  `}
`
export const Col = styled.div`
  display:flex;
  flex-direction:col;
  ${props => applyAlignmentAndJustification(props.$align, props.$justify)}
`

