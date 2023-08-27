import Button from '@/components/Button.styled';
import { Main } from '@/components/Main.styled';
import { Section } from '@/components/Section.styled';
import { useRouter } from "next/router";
import { H1,P,H4,H3,H5 } from "@/components/Text.styled";
import {Card, CardContent} from "@/components/Card.styled";
import {Row, Col} from "@/components/Row.styled";
import RadioInput from "./RadioInput.styled";
import { Footer } from './Footer.styled';

const QuizCard = ({quiz , index}) => {
  const answers = quiz?.answers;
  return (
    <>
    <Card $gap={1.5}>
        <Row $justify="between" $align="start">
          <H3>{"Question"}</H3>
          <H5>{quiz && quiz?.difficulty}</H5>
        </Row>
                <H4 key={quiz.id}>{index + 1}.&nbsp;{quiz.question || "some question data here..."}</H4>
    <CardContent>
                {answers && Object.keys(answers).map((key,index) =>
                { if(key == null) return;
                  return(
                    <>
                    {key && <Row $Background $justify="start" $align="start" key={key}>
                    <RadioInput type="radio" id={key} name="options" value={key}
                    />
                    <P for={key}>
                      {answers[key]}
                    </P>
                    </Row>}
                    </>

                  )})}
              </CardContent>
      </Card>
    </>
  );
}

export default QuizCard;