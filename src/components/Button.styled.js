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
  background-color: #7828C8;
  color: white;
`;

const errorStyles = `
  background-color: #F31260;
  color: white;
`;
const warningStyles = `
  background-color: #F5A524;
  color: white;
`;

const defaultStyles = `
  background-color: #71717A;
  color: black;
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
    default:
      return defaultStyles;
  }
};

const shadowColor = (bool) => bool && `box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;`

const shadowColorActive = `box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;`

const borderRadius = (radius) => {
  switch(radius){
    case "full" :
      return `1.5em`
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
  border-radius : ${a => a.radius ? borderRadius(a.radius) : `0.6em`};
  border-width: 0;
  outline:none;
  max-width: fit-content;
  padding:1em 1.6em;
  font-size:${a => a.size ?? 14}px;
  transition-property: scale,box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  cursor:pointer;
  transition-timing-function: linear;
  ${a => shadowColor(a.shadow)}

  &:hover {
  ${a=> (a.color) ? getVariantStyles(a.color) : defaultStyles}
  opacity:0.8;
  }
  &:focus { 
    ${a => a.shadow && shadowColorActive}
  }
  &:active {
    scale:0.98;
    ${a=>(a.color) ? getVariantStyles(a.color) : defaultStyles}
    box-shadow:none;
  }

`

export default Button;
