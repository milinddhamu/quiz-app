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
import Image from "next/image";
import { ImageWrapper } from "@/components/LogoWrapper.styled";
import BrandLogo from "/public/upraised.png"
import { Footer } from "@/components/Footer.styled";
import { Center } from './../components/Center.styled';

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
      <Section $gap={2} $justify="between" $align="center" $Relative >
          <Image 
          src={BrandLogo}
          alt="logo" 
          css={{maxWidth:"30%",height:"auto",padding:"1rem 1rem 0 0"}}
          />
          <Center><Button style={{fontFamily:"Poppins, sans-serif"}} $Disabled={true} $shadow $extraBold $paddingX="4rem" $paddingY="4rem" $square $size={46} $radius="full" > Quiz</Button></Center>
          <Footer>
      {!loading ? <Button $paddingX="6rem" $Bold $paddingY="1.5rem" $size={18} $radius="full" color="secondary" onClick={fetchData}> Quiz</Button> :
      <Button $paddingX="6rem" $Bold $Disabled={true} $paddingY="1.5rem" $size={18} $radius="full" color="disabled" >Loading...</Button>
      }
      </Footer>
      </Section>
    </Main>
  )
}
