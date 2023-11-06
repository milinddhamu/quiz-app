import axios from "axios";
import React, { useState } from 'react';
import { Main } from '@/styled/Main.styled';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { quizState } from "../../store/atoms";
import Quiz from "../components/Quiz";
import HomePage from "@/components/HomePage";


export default function Home() {
  const setQuizState = useSetRecoilState(quizState); // setter function for quizState
  const questions = useRecoilValue(quizState); // referencing quizState data (array of objects)
  const [loading, setLoading] = useState(false);
  const [buttonState, setButtonState] = useState(false);

  // Function to fetch quiz questions from the API client side
  const fetchData = async () => {
    setButtonState(true);
    try {
      const response = await axios.get('https://quizapi.io/api/v1/questions', {
        params: {
          apiKey: "tLulQQ3M6OKuxhUYEFioTKGqUmW6yUEyDPtBWaJ0", //API Key //process.env have some issue here
          limit: 10, // can add more features like tags, categories
        }
      });
      setQuizState(response.data); // setting data to state
    } catch (error) {
      console.error('Error fetching quiz questions:', error);
    } finally {
      setLoading(true);
      setButtonState(false);
    }
  };

  // Function to handle starting the quiz again
  const handleStartAgain = () => {
    setLoading(false);
    setButtonState(true);
    fetchData();
  }

  return (
    <>
      <Main>
        {!loading || !questions ? (
          // Home page where we can start quiz
          <HomePage fetchData={fetchData} buttonState={buttonState}/>
        ) : (
          // Section when quiz is started
          <Quiz handle={handleStartAgain} />
        )}
      </Main>
    </>
  );
}
