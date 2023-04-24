import { Container, Stack, Text, Title } from "@mantine/core";
import { Section } from "../../common/layout/Section";
import { useStyles } from "./styles";
import breakpoints from "../../../constants/breakpoints";
import { useBreakpoint } from "../../../lib/hooks/useBreakpoint";

interface IProps {}

function substackWidth(breakpoint: number) {
  if (breakpoint === breakpoints.LARGE) {
    return 780;
  } else if (breakpoint === breakpoints.MEDIUM) {
    return 500;
  } else {
    return 300;
  }
}

export const NewsletterSection = (props: IProps) => {
  const {} = props;
  const breakpoint = useBreakpoint();

  const { classes } = useStyles();
  return (
    <Section className={classes.newsletterSection}>
      <Container py="3rem">
        <Stack align={"center"}>
          <Title align="center" color={"indigo.3"}>
            Sign Up for the Newsletter!
          </Title>
          <Text color={"indigo.3"} size="xl" align="center">
            Get updates on what I write, read, learn, and build
          </Text>
          <iframe
            src="https://billoconnor1.substack.com/embed"
            width={`${substackWidth(breakpoint)}`}
            height="320"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </Stack>
      </Container>
    </Section>
  );
};
