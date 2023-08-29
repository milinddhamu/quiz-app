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
import Results from "./Results";

const Quiz = () => {
    const router = useRouter();
    const questions = useRecoilValue(quizState);
    const [page , setPage] = useState(0);
    const [resultState , setResultState] = useState(false)
    const [result, setResult] = useState({
      correct: 0,
      incorrect: 0,
      total: 0
    });
    const [resultData , setResultData] = useState({});
    const [userAnswers, setUserAnswers] = useState([{
      "key" : "",
      "ans":[],
    }]);
    const quiz = questions[page];
    const nextQues = () => {
      if (page < questions.length - 1) {
        setPage(prevIndex => prevIndex + 1);
      } else {
        handleResult();
        setResultState(true);
      }
    };

    const handleSubmit = (key,ans) => {
      setUserAnswers((prev)=>[
        ...prev,
        { "key" : key,
          "ans": ans }
      ]);
    };
    
    const generateResult = () => {
      const results = userAnswers.map(userAnswer => {
        const { key, ans } = userAnswer;
        const question = questions.find(q => q.id === key);
    
        if (!question) {
          return null; // Question not found
        }
    
        const isCorrect = question.correct_answer === ans;
        return { id: key, isCorrect };
      });
      
      return results;
    };

    const handleResult = () => {
      const result = generateResult();
      const correct = result.filter(answer => answer && answer.isCorrect).length;
      const incorrect = result.filter(answer => answer && !answer.isCorrect).length;
      const total = result.length;
      setResult({
        correct,
        incorrect,
        total
      });
    };
    
  return (
    <>
      <Main>
        {!resultState ?
        <QuizCard quiz={quiz} page={page} submit={handleSubmit} next={nextQues} result={result} /> :<Results 
        results={result}
        />}
        </Main>
    </>
  );
}

export default Quiz;