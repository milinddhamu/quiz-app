import { useRecoilValue } from "recoil";
import { quizState } from "../../store/atoms";
import { useState } from "react";
import QuizCard from "./QuizCard";
import Results from "./Results";

const Quiz = ({ handle }) => {
  const questions = useRecoilValue(quizState); // questions data (array of objects)
  const [page, setPage] = useState(0); // creating a counter to update questions
  const [resultState, setResultState] = useState(false); // state for showing result
  const [userAnswers, setUserAnswers] = useState([{
    "key": Number,
    "ans": String,
    "time": 0,
  }]); // state for user submission of question (we can store array if have multiple choice)
  const handleSubmit = (key, ans, quesTime) => {
    setUserAnswers((prev) => [
      ...prev,
      {
        "key": key,
        "ans": ans,
        "time": quesTime
      }
    ]);
  }; // function to set state for user submissions
  const nextQues = async () => {
    if (page < questions.length - 1) {
      setPage(prevIndex => prevIndex + 1);
    } else {
      setResultState(true);
    }
  }; // incrementing page counter
  const quiz = questions[page]; 
  if(!quiz) return (
    <div className="flex h-screen w-full justify-center items-center italic">
      Questions are not available this time!
    </div>
  ) // referencing to question object in questions array 
  return (
    <>
      {!resultState ?
        <QuizCard quiz={quiz} page={page} submit={handleSubmit} next={nextQues} /> // quiz card
        : 
        <Results user={userAnswers} questions={questions} handle={handle}/> // results after last submission
        }
    </>
  );
}

export default Quiz;