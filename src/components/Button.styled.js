import styled, { keyframes } from 'styled-components';

const gradientKeyframes = keyframes`
0% {
  --angle: 147deg;
}
100% {
  --angle: 300deg;
}
`;

const primaryStyles = `
  background-color: #ce004f;
  color: #ffaacc;
  
`;

const secondaryStyles = `
  background-color: #FF3B3C;
  color: white;
`;

const errorStyles = `
  background-color: #F31260;
  color: white;
`;
const warningStyles = `
  background-color: #ffffff;
  color: black;
`;
const disabledStyles = `
  background-color: #52525b;
  color: white;
`;

const defaultStyles = `
  background-color: #ffffff;
  color: #FF3B3F;
`;

const getVariantStyles = (color) => {
  switch (color) {
    case 'primary':
      return primaryStyles;
    case 'secondary':
      return secondaryStyles;
    case 'error':
      return errorStyles;
    case 'warning':
      return warningStyles;
    case 'disabled':
      return disabledStyles;
    default:
      return defaultStyles;
  }
};

const shadowColor = (bool) => bool && `box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;`

const shadowColorActive = `box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;`

const borderRadius = (radius) => {
  switch(radius){
    case "full" :
      return `9999px`
    case "lg" :
      return `0.8em`
    case "md" :
      return `0.6em`
    case "sm" :
      return `0.4em`
    case "xs" :
      return `0.2em`
    case "none":
      return `0em`
    default:
      return `0.5em`
  }
}; 

const Button = styled.button`
  ${a => (a.color) ? getVariantStyles(a.color) : defaultStyles}
  border-radius : ${a => a.$radius ? borderRadius(a.$radius) : `0.6em`};
  border-width: 0;
  font-family: 'Nunito', sans-serif;
  outline:none;
  ${a=> a.$square && `aspect-ratio:1/1;`}
  max-width: fit-content;
  padding:${a=> (a.$paddingX && a.$paddingY) ? `${a.$paddingY} ${a.$paddingX}` : `1rem 1.6rem` };
  font-size:${a => a.$size ?? 14}px;
  transition-property: scale,box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  cursor:pointer;
  transition-timing-function: linear;
  ${a => shadowColor(a.$shadow)}
  ${a=> a.$extraBold && `font-weight: 800;`}
  ${a=> a.$Bold && `font-weight: 800;`}
  &:hover {
  ${a=> (a.color) ? getVariantStyles(a.color) : defaultStyles}
  }
  &:focus { 
    ${a => a.shadow && shadowColorActive}
  }
  &:active {
    scale:0.98;
    ${a=>(a.color) ? getVariantStyles(a.color) : defaultStyles}
    box-shadow:none;
  }

  ${props => props.$Disabled && `
    pointer-events: none;
    cursor: not-allowed;
  `}
  

`

export default Button;
