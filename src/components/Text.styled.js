import styled from "styled-components";

export const H1 = styled.p`
  color: #9a01e0;
  font-family: 'Nunito', sans-serif;
  font-weight:900;
  font-size:40px;

`
export const H2 = styled.p`
  color: #111111;
  font-family: 'Nunito', sans-serif;
  font-weight:800;
  width:auto;
  font-size:40px;
  text-align:justify;
`
export const H3 = styled.p`
  color: #FB2576;
  font-family: 'Nunito', sans-serif;
  font-weight:600;
  width:auto;
  font-size:24px;
  text-align:justify;
`
export const H4 = styled.p`
  color: #343434;
  font-family: 'Nunito', sans-serif;
  font-weight:800;
  width:auto;
  font-size:21px;
  text-align:justify;
  padding-right:2rem;
`
export const H5 = styled.p`
  color: #111111;
  font-family: 'Nunito', sans-serif;
  font-weight:700;
  font-size:16px;
  text-align:justify;
  ${props => props.$gray && `
    color:#747B77;
    text-align:center;
  `}
`

export const P = styled.p`
  color: #343434;
  text-align:justify;
  font-family: 'Nunito', sans-serif;
  font-size:16px;
  padding:0rem 1rem 0rem 0rem;
`