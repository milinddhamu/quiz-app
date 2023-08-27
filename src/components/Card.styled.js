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


export const Card = styled.div`
  display:flex;
  width:80%;
  min-height:70vh;
  margin:0 5%;
  border-radius:1.2em;
  flex-direction:column;
  border:2px solid #3F007150;
  padding:1.5rem;
  background-color:#15005070;
  gap:${a=>a.$gap || 1}em;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  ${props => applyAlignmentAndJustification(props.$align, props.$justify)}

`
export const CardContent = styled.div`
  flex: 1;
  display:flex;
  flex-direction:column;
  gap:${a=>a.$gap || 1}em;

  
`



