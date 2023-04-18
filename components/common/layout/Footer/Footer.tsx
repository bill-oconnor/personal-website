import { Box, Divider, Group, Text } from "@mantine/core";
import { Section } from "../Section";
import { useStyles } from "./styles";

export const Footer = () => {
  const { classes } = useStyles();

  return (
    <Section className={classes.footer}>
      <Box sx={{ maxWidth: 450 }} mx="auto">
        <Group align={"center"} position="center">
          <a
            target="_blank"
            href="https://twitter.com/slick_willyO"
            rel="noreferrer"
          >
            Twitter
          </a>
          <Divider orientation="vertical" />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/william-o-connor512/"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <Divider orientation="vertical" />
          <a
            target="_blank"
            href="https://github.com/willoconnor18"
            rel="noreferrer"
          >
            GitHub
          </a>
        </Group>
      </Box>
      <Text align="center">&copy; 2023 William O&apos;Connor</Text>
    </Section>
  );
};
