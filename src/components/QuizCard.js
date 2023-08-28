import Button from '@/components/Button.styled';
import { Main } from '@/components/Main.styled';
import { Section } from '@/components/Section.styled';
import { useRouter } from "next/router";
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
      ...prevCheckedStates,
      [key]: !prevCheckedStates[key]
    }));
  };
  const ans = Object.keys(checkedStates).filter(key => checkedStates[key] === true);
  function splitStringIntoTwoWords(inputString) {
    if(!inputString) return;
    const words = inputString.trim().split(/\s+/);
    if (words.length <= 2) {
      return words;
    }
    return `${words[0], words[1]}`;
  };

  const handleSubmitNext = () => {
    submit(key,ans);
    next();
    setCheckedStates({});
  }


  return (
    <>
    <Section $align="center">
    <Card $gap={2}>
                <H4 key={quiz.id}>{page + 1}.&nbsp;{quiz.question || "some question data here..."}</H4>
    <CardContent>
                {answers && Object.keys(answers).map((key,index) =>
                { if(answers[key] === null) return;
                  return(
                    <>
                    {key && <RowButton $backgroundStyle={!checkedStates[key] ? `background1` : `background2`} $justify="start" $align="start" key={index} onClick={() => handleClick(key)}>
                    <RadioInput type="checkbox" id={key} name="options" value={key}  
                      checked={checkedStates[key] || false}
                      onChange={()=>{}}
                    />
                      <P htmlFor={key}>
                      {splitStringIntoTwoWords(answers[key])}
                    </P>
                    </RowButton>}
                    </>
                  )})}
              </CardContent>
      </Card>
      <Footer>
        <Row $justify="end">
        <Button $paddingX="6rem" $Bold $paddingY="1.5rem" $size={18} $radius="full" color="secondary" onClick={handleSubmitNext}>Submit & Next</Button>
        </Row>
        </Footer>
        </Section>
    </>
  );
}

export default QuizCard;