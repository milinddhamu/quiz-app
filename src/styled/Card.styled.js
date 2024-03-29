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


export const Card = styled.div`
  display:flex;
  box-sizing: border-box;
  flex-direction:column;
  width:100%;
  min-height:100vh;
  object-fit:contain;
  border-radius:2em;
  padding:0.8rem 1.8rem 1.8rem 1.8rem;
  margin:10rem 0rem 0rem 0rem;
  background-color:#ffffff;
  gap:${a => a.$gap || 1}em;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  ${props => applyAlignmentAndJustification(props.$align, props.$justify)}
`
export const CardContent = styled.div`
  flex: 1;
  display:flex;
  flex-direction:column;
  gap:${a => a.$gap || 0.4}em;
  padding:0rem 0rem 10rem 0rem;
  ${props => applyAlignmentAndJustification(props.$align, props.$justify)}

  
`



