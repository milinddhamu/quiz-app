import React from 'react';
import styled from 'styled-components';
import { Center } from './Center.styled';
import { H3, P } from './Text.styled';
import { H2 } from '@/components/Text.styled';
import { Container,ProgressCircle,ProgressSvg , BackgroundCircle , ProgressCircleBackground , CenteredText } from './Progress.styled';

const CircularProgressBar = ({ percentage, circleWidth ,index , total, stroke}) => {
  const r = circleWidth /2.5;
  const adjWidth = circleWidth + stroke * 2;
  const bgRadius = r + stroke*1.5; 
  const dashArray = r * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  
  return (
    <Container $adjWidth={adjWidth}>
    <ProgressSvg viewBox={`0 0 ${adjWidth} ${adjWidth}`} $adjWidth={adjWidth}>
      <BackgroundCircle  $adjWidth={adjWidth} $r={bgRadius}/>
      <ProgressCircleBackground $adjWidth={adjWidth} $r={r} $stroke={stroke} />
      <ProgressCircle $adjWidth={adjWidth} $r={r} $stroke={stroke} $dashArray={dashArray} $dashOffset={dashOffset}/>
      <CenteredText x="50%" y="50%">
        {(index && total) ? 
          `${index}/${total}` :`${percentage}%` }
        </CenteredText>
    </ProgressSvg>
    </Container>
    
  );
};

export default CircularProgressBar;
