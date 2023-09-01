import React from 'react';
import { Container,ProgressCircle,ProgressSvg , BackgroundCircle , ProgressCircleBackground , CenteredText } from '../styled/Progress.styled';

const CircularProgressBar = ({ percentage, circleWidth ,index , total, stroke}) => {
  const r = circleWidth /2.5;
  const adjWidth = circleWidth + stroke * 2;
  const bgRadius = r + stroke*1.5; 
  const dashArray = r * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  
  return (
    <Container $adjWidth={adjWidth}>
    
    {/* Circular wrapper for progress */}

    <ProgressSvg viewBox={`0 0 ${adjWidth} ${adjWidth}`} $adjWidth={adjWidth}>
    {/* Background of circular progress component with padding */}
      <BackgroundCircle  $adjWidth={adjWidth} $r={bgRadius}/>
      
      {/* Background of progress bar   */}
      <ProgressCircleBackground $adjWidth={adjWidth} $r={r} $stroke={stroke} />

      {/* Progress bar */}
      <ProgressCircle $adjWidth={adjWidth} $r={r} $stroke={stroke} $dashArray={dashArray} $dashOffset={dashOffset}/>

      {/* Text inside progress */}
      <CenteredText x="50%" y="50%">
        {(index && total) ? 
          `${index}/${total}` :`${percentage}%` }
        </CenteredText>

    </ProgressSvg>

    </Container>
    
  );
};

export default CircularProgressBar;
