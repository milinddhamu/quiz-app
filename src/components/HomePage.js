import { Section } from "@/styled/Section.styled";
import { Center } from "@/styled/Center.styled";
import { Footer } from "@/styled/Footer.styled";
import Button from "@/styled/Button.styled";
import Image from "next/image";

const HomePage = ({ buttonState , fetchData }) => {
  return (
    <>
    <Section $gap={2} $justify="between" $align="center" style={{ minHeight: "100vh" }}>
            <Image
              src=""
              alt="logo"
              css={{ maxWidth: "30%", height: "auto", padding: "0rem 1rem 0 0" }}
            />
            <Center>
              <Button
                style={{ fontFamily: "Poppins, sans-serif" }}
                $Disabled={true} $shadow $extraBold $paddingX="4rem" $paddingY="4rem" $square $size={46} $radius="full">
                Quiz
              </Button>
            </Center>
            <Footer>
              {!buttonState ? (
                <Button $paddingX="6rem" $Bold $paddingY="1.5rem" $size={18} $radius="full" color="secondary" onClick={fetchData}>
                  Start
                </Button>
              ) : (
                <Button $paddingX="6rem" $Bold $Disabled={true} $paddingY="1.5rem" $size={18} $radius="full" color="disabled" >
                  Loading...
                </Button>
              )}
            </Footer>
          </Section>
        </>
  );
}

export default HomePage;
