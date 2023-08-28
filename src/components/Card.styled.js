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
  height:min(100%,750px);
  border-radius:2em;
  flex-direction:column;
  padding:2em;
  margin:4rem 0rem 0rem 0rem;
  background-color:#ffffff;
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
  gap:${a=>a.$gap || 0.4}em;
  padding:0rem 0rem 10rem 0rem;

  
`



