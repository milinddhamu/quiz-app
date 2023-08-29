import { Section } from '@/components/Section.styled';
import { useRouter } from "next/router";
import { H1,P,H2,H3,H5 } from "@/components/Text.styled";
import {Card, CardContent} from "@/components/Card.styled";
import {Row, Col} from "@/components/Row.styled";
import RadioInput from "./RadioInput.styled";
import { Footer } from './Footer.styled';
import { RowButton } from "./RowButton.styled";
import { useState,useEffect } from 'react';
import Button from '@/components/Button.styled';

const Results = ({results}) => {
  const router = useRouter();
  return (
    <>
    <Section $align="center">
    <Card $gap={2}>
    <CardContent $gap={1} $align="center">
                <H2>Your result</H2>
    <Button $shadow $extraBold $paddingX="4rem" $paddingY="4rem" $square $size={46} $radius="full" > Quiz</Button>

    <RowButton $Disabled={true} $backgroundStyle="background3" $justify="start" $align="center" >
                    <RadioInput type="checkbox" name="options"
                    $correct 
                      checked={true}
                      onChange={()=>{}}
                    />
                    <H5>{results.correct}</H5>
                      <H5 $gray>
                      {"Correct"}
                    </H5>
                    </RowButton>
    <RowButton $Disabled={true} $backgroundStyle="background4" $justify="start" $align="center" >
                    <RadioInput type="checkbox" name="options"
                    $incorrect 
                      checked={true}
                      onChange={()=>{}}
                    />
                    <H5>{results.incorrect}</H5>
                      <H5 $gray>
                      {"Incorrect"}
                    </H5>
                    </RowButton>


              </CardContent>
      </Card>
      <Footer>
        <Row $justify="end">
        <Button $paddingX="6rem" $Bold $paddingY="1.5rem" $size={18} $radius="full" color="secondary" onClick={()=> router.push("/")}>Start again</Button>
        </Row>
        </Footer>
        </Section>
    </>
  );
}

export default Results;