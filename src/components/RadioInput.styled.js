import styled from "styled-components"

const RadioInput = styled.input`
  appearance: none;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  aspect-ratio: 1/1;
  border: 2px solid #999;
  transition: 0.2s all linear;
  position: relative;
  cursor:pointer;
&:checked {
  border: 6px solid #ce004f;

}
`

export default RadioInput