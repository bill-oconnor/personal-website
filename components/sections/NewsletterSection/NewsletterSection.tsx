import { Container, Stack, Text, Title } from "@mantine/core";
import { Section } from "../../common/layout/Section";
import { useStyles } from "./styles";

interface IProps {}

export const NewsletterSection = (props: IProps) => {
  const {} = props;

  const { classes } = useStyles();
  return (
    <Section className={classes.newsletterSection}>
      <Container py="3rem">
        <Stack align={"center"}>
          <Title color={"indigo.3"}>Sign Up for the Newsletter!</Title>
          <Text color={"indigo.3"} size="xl">
            Get updates on what I write, read, learn, and build
          </Text>
          <iframe
            src="https://billoconnor1.substack.com/embed"
            width="780"
            height="320"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </Stack>
      </Container>
    </Section>
  );
};
