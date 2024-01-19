import Button from '@/styled/Button.styled';
import { Section } from '@/styled/Section.styled';
import { P, H4 } from "@/styled/Text.styled";
import { Card, CardContent } from "@/styled/Card.styled";
import { Row } from "@/styled/RowCol.styled";
import RadioInput from "../styled/RadioInput.styled";
import { Footer } from '../styled/Footer.styled';
import { RowButton } from "../styled/RowButton.styled";
import { useState, useEffect } from 'react';
import CircularProgressBar from './CircularProgressBar';

const QuizCard = ({ quiz, page, submit, next }) => {
  const answers = quiz?.answers; // referencing answer/answers inside question object called as quiz
  const key = quiz?.id;

  const [checkedStates, setCheckedStates] = useState({}); // state for storing options input
  
  const [timer, setTimer] = useState(0); // timer counter
  
  const handleClick = (key) => {
    setCheckedStates((prevCheckedStates) => ({
      [key]: !prevCheckedStates[key]
    }));
  }; // setter function to store state as per key with boolean true or false
  
  const ans = Object.keys(checkedStates).filter(key => checkedStates[key] === true).join(""); // getting option values as per key if they are true
  
  const handleSubmitNext = async () => {
    try {
      submit(key, ans, timer); // setting user submission state in Quiz component
      setCheckedStates({}); // resetting options data
      await next(); // going to next question
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  {/* Variables for time formatting */}
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  useEffect(() => {
    setTimer(0); // resetting timer on next question
  }, [page]);

  return (
    <>
      <Section $align="center">

        {/* Card Component for quiz*/}
        <Card $gap={1} style={{ position: "relative" }}>

          {/* Timer on left*/}
          <Row><P>{formattedTime}</P></Row>

          {/* Question text*/}
          <H4>{quiz.question || "some question data here..."}</H4>

          {/* Child component for card */}
          <CardContent>

            {/* Mapping options if option is not null */}
            {answers && Object.keys(answers).map((key, index) => {
              if (answers[key] === null) return;
              return (
                <>
                  {key && //Radio Input wrapper to create border change when selected
                  <RowButton $backgroundStyle={!checkedStates[key] ? `background1` : `background2`} $justify="start" $align="center" key={`options: ${index}`} onClick={() => handleClick(key)}>

                    {/* Radio input */}
                    <RadioInput type="checkbox" id={key} name="options" value={key}
                      checked={checkedStates[key] || false}
                      onChange={() => { }} // As we are setting state using radio input wrapper - RowButton so left it empty rather than not declaring
                    />
                    
                    <P htmlFor={key}>
                      {answers[key]} {/* Option Text*/}
                    </P>
                  </RowButton>}
                </>
              )
            })}
          </CardContent>
        </Card>

        {/* Footer Button */}
        <Footer $backgroundColor> 
          <Row $justify="end" >
            <Button $paddingX="6rem" $Bold $Disabled={!(ans) ? true : false} $paddingY="1.5rem" $size={18} $radius="full" color={(ans?.length) ? `secondary` : `disabled`} onClick={handleSubmitNext}>{(page === 9) ? "Submit & Finish" : "Submit & Next"}</Button>
          </Row>
        </Footer>

        {/* Progress bar for questions */}
        <div style={{ position: "absolute", top: "6rem" }}>
          <CircularProgressBar percentage={(page + 1) / 10 * 100} circleWidth={150} index={page + 1} total={10} stroke={10} />
        </div>

      </Section>
    </>
  );
}

export default QuizCard;