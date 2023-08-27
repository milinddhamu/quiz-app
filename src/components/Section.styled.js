import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 768px);
  ${a => a.$height && `  height: min(100%, ${a.$height || 480}px);
  `}
  margin: ${a=> a.$margin ? `${a.$margin}` : `0 0 2rem 0`};
  gap: ${a=>a.$gap || 4}rem;
`;