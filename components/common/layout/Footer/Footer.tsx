import { Text } from "@mantine/core";
import { Section } from "../Section";
import { useStyles } from "./styles";

export const Footer = () => {
  const { classes } = useStyles();

  return (
    <Section className={classes.footer}>
      <Text align="center">Something about copyrights and such</Text>
    </Section>
  );
};
