import axios from "axios";
import React, { useState, useEffect } from 'react';
import Button from '@/components/Button.styled';
import { Main } from '@/components/Main.styled';
import { Section } from '@/components/Section.styled';
import { useRouter } from "next/router";
import { H1,P,H4,H3,H5 } from "@/components/Text.styled";
import {Card, CardContent} from "@/components/Card.styled";
import Row from "@/components/Row.styled";
import { useSetRecoilState } from "recoil";
import { quizState } from "../../store/atoms";
import Quiz from "../components/Quiz";

export default function Home() {
  const setQuizState = useSetRecoilState(quizState);
  const router = useRouter();
  const [loading , setLoading] = useState(false)
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://quizapi.io/api/v1/questions', {
        params: {
          apiKey: "tLulQQ3M6OKuxhUYEFioTKGqUmW6yUEyDPtBWaJ0",
          limit: 10,
        }
      });
        setQuizState(response.data)
        setLoading(false);
        router.push('/start')      
      } catch (error) {
      console.error('Error fetching quiz questions:', error);
    }
  };

  return (
    <Main>
      <Section $gap={2} $height={540}>
      <H1>Quiz App</H1>
      {!loading ? <Button onClick={fetchData}>fetch data</Button> :
      <H4>Loading...</H4>}
      </Section>
    </Main>
  )
}
