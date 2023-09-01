import { Section } from '@/styled/Section.styled';
import { P, H5 } from "@/styled/Text.styled";
import { Card, CardContent } from "@/styled/Card.styled";
import { Row } from "@/styled/RowCol.styled";
import RadioInput from "../styled/RadioInput.styled";
import { Footer } from '../styled/Footer.styled';
import { RowButton } from "../styled/RowButton.styled";
import { useState, useEffect } from 'react';
import Button from '@/styled/Button.styled';
import CircularProgressBar from './CircularProgressBar';

const Results = ({ handle, user, questions }) => {
  const [result, setResult] = useState({
    correct: 0, // correct answers
    incorrect: 0, // incorrect answers
    total: 0, // total questions
    totalTime: 0 // total time
  });
  // result generator
  const generateResult = () => {
    const results = user?.map(userAnswer => {
      const { key, ans } = userAnswer;
      const question = questions?.find(q => q.id === key);
      if (!question) {
        return null;
      }
      const isCorrect = question?.correct_answer === ans;
      return { id: key, isCorrect: isCorrect };
    });
    return results;
  };
  //formatting total time
  const TotalTimeSpent = () => {
    if (result?.totalTime === 0) return;
    const minutes = Math.floor(result.totalTime / 60);
    const seconds = result.totalTime % 60;
    const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    return formattedTime
  }

  // Result function to generate result as per result page
  const handleResult = () => {
    const totalResult = generateResult(user);
    const totalTime = user.reduce((acc, item) => acc += item.time, 0);
    const correct = totalResult?.filter(answer => answer && answer.isCorrect).length;
    const incorrect = totalResult?.filter(answer => answer && !answer.isCorrect).length;
    const total = totalResult?.length - 1;
    setResult({
      correct,
      incorrect,
      total,
      totalTime
    }); // setting state for result
  };
  useEffect(() => {
    handleResult(); // Result calculated when page loads
  }, [user]);

  const resultPercent = (result.correct / result.total) * 100;

  return (
    <>
      <Section $align="center">
        <Card $gap={2}>
          <CardContent $gap={2} $align="center">
            <P style={{ fontSize: "30px", fontWeight: "800" }}>Your result</P>

            {/* Progress bar to show result in percentage*/}
            <CircularProgressBar percentage={resultPercent} circleWidth={250} stroke={30} $fontsize={35} $fontweight={900} />
            <P style={{ fontSize: "20px", fontWeight: "700" }}>{"Total time taken - "}<TotalTimeSpent /></P>

            {/* Needed a fix here */}
            {/* Correct Options box to show correct answers , while reusing radio input*/}
            <RowButton $Disabled={true} $backgroundStyle="background3" $justify="start" $align="center" >
              <RadioInput type="checkbox" name="options"
                $correct
                checked={true}
                onChange={() => { }}
              />
              <H5>{result?.correct}</H5>
              <H5 $gray>
                {"Correct"}
              </H5>
            </RowButton>

            {/* Incorrect Options box to show incorrect answers , while reusing radio input*/}
            <RowButton $Disabled={true} $backgroundStyle="background4" $justify="start" $align="center" >
              <RadioInput type="checkbox" name="options"
                $incorrect
                checked={true}
                onChange={() => { }}
              />
              <H5>{result?.incorrect}</H5>
              <H5 $gray>
                {"Incorrect"}
              </H5>
            </RowButton>
          </CardContent>
        </Card>

        {/* Footer button*/}
        <Footer>
          <Row $justify="end">
            <Button $paddingX="6rem" $Bold $paddingY="1.5rem" $size={18} $radius="full" color="secondary" onClick={() => handle()}>Start again</Button>
          </Row>
        </Footer>
      </Section>
    </>
  );
}

export default Results;