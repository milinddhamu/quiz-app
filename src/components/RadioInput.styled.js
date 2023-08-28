import styled from "styled-components"

const RadioInput = styled.input`
-webkit-appearance: none;
height: 1.2rem;
width: 1.2rem;
cursor-pointer;
aspect-ratio:1/1;
position: relative;
margin-left:1rem; 
padding:0.1rem;
transition: 0.20s;
border:2px solid gray;
text-align: center;
font-size:0.6rem;
font-family: 'Fira Sans', sans-serif;
font-weight: 900;
color: white;
border-radius: 9999px;
outline: none;

&:checked {
background-color: #0E9700;
border:2px solid #0E9700;
}

&:checked:before {
content: "✔";
}

&:hover {
cursor: pointer; 
opacity: 0.8;
}
`

export default RadioInput