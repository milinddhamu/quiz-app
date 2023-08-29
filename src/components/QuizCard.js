import Button from '@/components/Button.styled';
import { Main } from '@/components/Main.styled';
import { Section } from '@/components/Section.styled';
import { H1,P,H4,H3,H5 } from "@/components/Text.styled";
import {Card, CardContent} from "@/components/Card.styled";
import {Row, Col} from "@/components/Row.styled";
import RadioInput from "./RadioInput.styled";
import { Footer } from './Footer.styled';
import { RowButton } from "./RowButton.styled";
import { useState,useEffect } from 'react';
const QuizCard = ({quiz , page ,submit , next}) => {
  const answers = quiz?.answers;
  const key = quiz?.id;
  const [checkedStates, setCheckedStates] = useState({});
  const handleClick = (key) => {
    setCheckedStates((prevCheckedStates) => ({
      [key]: !prevCheckedStates[key]
    }));
  };
  const ans = Object.keys(checkedStates).filter(key => checkedStates[key] === true).join("");

  const handleSubmitNext = () => {
    if(!ans.length) return;
    submit(key,ans);
    next();
    setCheckedStates({});
  };


  return (
    <>
    <Section $align="center">
    <Card $gap={0.6}>
                <H4>{quiz.question || "some question data here..."}</H4>
    <CardContent>
                {answers && Object.keys(answers).map((key,index) =>
                { if(answers[key] === null) return;
                  return(
                    <>
                    {key && <RowButton $backgroundStyle={!checkedStates[key] ? `background1` : `background2`} $justify="start" $align="center" key={`options: ${index}`} onClick={() => handleClick(key)}>
                    <RadioInput type="checkbox" id={key} name="options" value={key}  
                      checked={checkedStates[key] || false}
                      onChange={()=>{}}
                    />
                      <P htmlFor={key}>
                      {answers[key]}
                    </P>
                    </RowButton>}
                    </>
                  )})}
              </CardContent>
      </Card>
      <Footer $backgroundColor>
        <Row $justify="end" >
        <Button $paddingX="6rem" $Bold $Disabled={!(ans.length) ? true : false} $paddingY="1.5rem" $size={18} $radius="full" color={(ans?.length) ? `secondary` : `disabled`} onClick={handleSubmitNext}>Submit & Next</Button>
        </Row>
        </Footer>
        </Section>
    </>
  );
}

export default QuizCard;