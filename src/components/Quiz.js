import { useRecoilValue } from "recoil";
import { quizState } from "../../store/atoms";
import { useState,useEffect } from "react";
import Button from '@/components/Button.styled';
import { Main } from '@/components/Main.styled';
import { Section } from '@/components/Section.styled';
import { useRouter } from "next/router";
import { H1,P,H4,H3,H5 } from "@/components/Text.styled";
import {Card, CardContent} from "@/components/Card.styled";
import {Row, Col} from "@/components/Row.styled";
import RadioInput from "./RadioInput.styled";
const Quiz = () => {
    const questions = useRecoilValue(quizState);
    const [page , setPage] = useState(0);
    const quiz = questions[page]
    const nextQues = () => {
      setPage(prevIndex => (prevIndex + 1) % questions.length);
    }
    const answers = quiz?.answers;
  return (
    <>
    <Card $gap={2}>
        <Row $justify="between" $align="start">
          <H3>{"Question"}</H3>
          <H5>{quiz && quiz?.difficulty}</H5>
        </Row>
        {quiz && 
              <CardContent $gap={1.5}>
                <H4 key={quiz.id}>{page + 1}.&nbsp;{quiz.question || "some question data here..."}</H4>
                {answers && Object.keys(answers).map((key,index) =>
                { if(!key) return;
                  return(
                    <>
                    {key && <Row $justify="start" $align="start" key={key}>
                    <RadioInput type="radio" id={key} name="options" value={key}
                    />
                    <P for={key}>
                      {answers[key]}
                    </P>
                    </Row>}
                    </>

                  )})}
              </CardContent>
        }
        <Row $justify="end">
        <Button size={15} radius="lg" color="primary" onClick={nextQues}>Submit & Next</Button>
        </Row>
      </Card>
    </>
  );
}

export default Quiz;