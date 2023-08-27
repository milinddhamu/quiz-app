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

export const Row = styled.div`
  display:flex;
  width:100%;
  flex-direction:row;
  ${props => applyAlignmentAndJustification(props.$align, props.$justify)}
`
export const Col = styled.div`
  display:flex;
  flex-direction:col;
  ${props => applyAlignmentAndJustification(props.$align, props.$justify)}
`

