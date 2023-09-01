import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: ${props => props.$adjWidth}px;
    height: ${props => props.$adjWidth}px;
  `;

export const ProgressSvg = styled.svg`
    width: ${props => props.$adjWidth}px;
    height: ${props => props.$adjWidth}px;
    transform: rotate(-90deg);
  `;

export const BackgroundCircle = styled.circle`
    cx: ${props => props.$adjWidth / 2}px;
    cy: ${props => props.$adjWidth / 2}px;
    r: ${props => props.$r}px;
    fill: white;
  `;

export const ProgressCircleBackground = styled.circle`
    cx: ${props => props.$adjWidth / 2}px;
    cy: ${props => props.$adjWidth / 2}px;
    r: ${props => props.$r}px;
    fill: transparent;
    stroke-width: ${props => props.$stroke}px;
    
    stroke: #F3F4FA;
    
    stroke-linecap: round;
  `;

export const ProgressCircle = styled.circle`
    cx: ${props => props.$adjWidth / 2}px;
    cy: ${props => props.$adjWidth / 2}px;
    r: ${props => props.$r}px;
    fill: transparent;
    stroke-width: ${props => props.$stroke}px;
    stroke-dasharray: ${props => props.$dashArray};
    stroke-dashoffset: ${props => props.$dashOffset};
    
    stroke: #44B77B;
    
    stroke-linecap: round;
    transform-origin: center;
    transition: stroke-dashoffset 0.4s ease;
  `;

export const CenteredText = styled.text`
    font-size: ${props => props.$fontSize || 20}px;
    font-weight: ${props => props.$fontWeight || 600};
    color: #111111;

    dominant-baseline: middle;
    text-anchor: middle;
    transform-origin: center;
    transform: rotate(90deg);
  `;
