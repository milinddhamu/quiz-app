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
    const router = useRouter()
    const questions = useRecoilValue(quizState);
    const [page , setPage] = useState(0);
    const [results , setResults] = useState(false);
    const [userAnswers, setUserAnswers] = useState([{
      "key" : "",
      "ans":[],
    }]);
    const quiz = questions[page];
    const nextQues = () => {
      if (page < questions.length - 1) {
        setPage(prevIndex => prevIndex + 1);
      } else {
        router.push("/");
      }
    };

    const handleSubmit = (key,ans) => {
      setUserAnswers((prev)=>[
        ...prev,
        { "key" : key,
          "ans": [...ans] }
      ]);
    };
    console.log(userAnswers, questions)
  return (
    <>
      <Main>{quiz && <QuizCard quiz={quiz} page={page} submit={handleSubmit} next={nextQues} />}       
        </Main>
    </>
  );
}

export default Quiz;