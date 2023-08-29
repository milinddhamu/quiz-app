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
    case "around":
      css += "justify-content: space-around;";
      break;
    default:
      break;
  }
  return css;
};


export const Section = styled.div`
  display: flex;
  flex-direction: column;
  ${props=> props.$Relative && `position:relative;`}
  ${props => applyAlignmentAndJustification(props.$align, props.$justify)}
  width: min(100%, 768px);
  height: 100vh;
  gap: ${a=>a.$gap || 4}rem;
`;