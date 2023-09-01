const { default: styled } = require("styled-components");

export const Footer = styled.footer`
  position:fixed;
  bottom:0;
  padding:1.5rem;
  ${props=> props.$backgroundColor && `
  background-image: linear-gradient(to top, #ffffff, #b9b9b910, #77777700);
  `}
`