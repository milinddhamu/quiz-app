import { Section } from '@/components/Section.styled';
import { H1,P,H2,H3,H5 } from "@/components/Text.styled";
import {Card, CardContent} from "@/components/Card.styled";
import {Row, Col} from "@/components/Row.styled";
import RadioInput from "./RadioInput.styled";
import { Footer } from './Footer.styled';
import { RowButton } from "./RowButton.styled";
import { useState,useEffect } from 'react';
import Button from '@/components/Button.styled';

const Results = ({handle,user,questions}) => {
  const [result, setResult] = useState({
    correct: 0,
    incorrect: 0,
    total: 0
  });

  const generateResult = () => {
    const results = user?.map(userAnswer => {
      const { key, ans } = userAnswer;
      const question = questions?.find(q => q.id === key);
      if (!question) {
        return null;
      }
      const isCorrect = question?.correct_answer === ans;
      return { id: key, isCorrect:isCorrect };
    });
    
    return results;

  };
  const handleResult = () => {
    const totalResult = generateResult(user)
    const correct = totalResult?.filter(answer => answer && answer.isCorrect).length;
    const incorrect = totalResult?.filter(answer => answer && !answer.isCorrect).length;
    const total = totalResult?.length - 1;
    setResult({
      correct,
      incorrect,
      total
    });
  };
  useEffect(()=>{
    handleResult();
  },[user])
  
  
  return (
    <>
    <Section $align="center">
    <Card $gap={2}>
    <CardContent $gap={1} $align="center">
                <H2>Your result</H2>
    <Button $shadow $extraBold $paddingX="4rem" $paddingY="4rem" $square $size={46} $radius="full" > Quiz</Button>

    <RowButton $Disabled={true} $backgroundStyle="background3" $justify="start" $align="center" >
                    <RadioInput type="checkbox" name="options"
                    $correct 
                      checked={true}
                      onChange={()=>{}}
                    />
                    <H5>{result?.correct}</H5>
                      <H5 $gray>
                      {"Correct"}
                    </H5>
                    </RowButton>
    <RowButton $Disabled={true} $backgroundStyle="background4" $justify="start" $align="center" >
                    <RadioInput type="checkbox" name="options"
                    $incorrect 
                      checked={true}
                      onChange={()=>{}}
                    />
                    <H5>{result?.incorrect}</H5>
                      <H5 $gray>
                      {"Incorrect"}
                    </H5>
                    </RowButton>


              </CardContent>
      </Card>
      <Footer>
        <Row $justify="end">
        <Button $paddingX="6rem" $Bold $paddingY="1.5rem" $size={18} $radius="full" color="secondary" onClick={()=> handle()}>Start again</Button>
        </Row>
        </Footer>
        </Section>
    </>
  );
}

export default Results;