import Quiz from "@/components/Quiz";
import { Section } from "@/components/Section.styled";
import { Main } from '@/components/Main.styled';
const start = () => {
  return (
    <>
    <Main>
      <Section $gap={2} $height={540} $margin="2rem">
      <Quiz />
      </Section>
    </Main>
    </>
  );
}

export default start;