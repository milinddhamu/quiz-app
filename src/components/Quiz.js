import { useRecoilValue } from "recoil";
import { quizState } from "../../store/atoms";
import { useState,useEffect } from "react";
import Button from '@/components/Button.styled';
import { Main } from '@/components/Main.styled';
import { Section } from '@/components/Section.styled';
import { H1,P,H4,H3,H5 } from "@/components/Text.styled";
import {Card, CardContent} from "@/components/Card.styled";
import {Row, Col} from "@/components/Row.styled";
import RadioInput from "./RadioInput.styled";
import QuizCard from "./QuizCard";
import { Footer } from "./Footer.styled";
import Results from "./Results";

const Quiz = ({handle}) => {
    const questions = useRecoilValue(quizState);
    const [page , setPage] = useState(0);
    const [resultState , setResultState] = useState(false)
    
    const [userAnswers, setUserAnswers] = useState([{
      "key" : Number,
      "ans": String,
    }]);
    const handleSubmit = (key,ans) => {
      setUserAnswers((prev)=>[
        ...prev,
        { "key" : key,
          "ans": ans }
      ]);
    };
    const nextQues = async () => {
      if ( page < questions.length -1) {
        setPage(prevIndex => prevIndex + 1);
      } else {
        setResultState(true);
      }
    };
    const quiz = questions[page];
    
  return (
    <>
        {!resultState ?
        <QuizCard quiz={quiz} page={page} submit={handleSubmit} next={nextQues} /> :<Results 
        user={userAnswers} questions={questions} handle={handle}
        />}
    </>
  );
}

export default Quiz;