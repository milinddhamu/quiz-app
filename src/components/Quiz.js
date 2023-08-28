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
import QuizCard from "./QuizCard";
import { Footer } from "./Footer.styled";
const Quiz = () => {
    const questions = useRecoilValue(quizState);
    const [page , setPage] = useState(0);
    const [resetCounter, setResetCounter] = useState(0);
    const quiz = questions[page]
    const nextQues = () => {
      handleReset();
      setPage(prevIndex => (prevIndex + 1) % questions.length);
    };
    const handleReset = () => {
    setResetCounter(resetCounter + 1);
  };
  return (
    <>
      <Main>
        <Section $align="center">
        {quiz && <QuizCard quiz={quiz} index={page} resetState={resetCounter} />}
        <Footer>
        <Row $justify="end">
        <Button $paddingX="6rem" $Bold $paddingY="1.5rem" $size={18} $radius="full" color="secondary" onClick={nextQues}>Submit & Next</Button>
        </Row>
        </Footer>
        </Section>
        </Main>
    </>
  );
}

export default Quiz;