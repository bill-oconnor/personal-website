import { Box, CSSObject, Paper, Title } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import { useStyles } from "./styles";

interface IProps extends React.HTMLProps<HTMLDivElement> {
  title?: string;
  background?: string;
  styleParams?: CSSObject;
  className?: string;
  withPaper?: boolean;
}

export const Section: React.FC<PropsWithChildren<IProps>> = ({
  title,
  children,
  styleParams = {},
  className,
  background,
  withPaper,
  ...htmlProps
}) => {
  const { classes } = useStyles({ background });
  const wrappedContainer = (section: JSX.Element) => {
    if (className) {
      return <div className={className}>{section}</div>;
    } else {
      return <>{section}</>;
    }
  };
  const wrappedContent = (content: JSX.Element) => {
    if (title || withPaper) {
      return (
        <Paper
          py="md"
          px="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            width: "100%",
          }}
        >
          {content}
        </Paper>
      );
    } else {
      return content;
    }
  };

  return wrappedContainer(
    <section className={classes.section} id={title} {...htmlProps}>
      <Box
        p="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          width: "100%",
        }}
      >
        {wrappedContent(
          <>
            {title ? (
              <Title className="section-title" order={3} mb="md">
                {title}
              </Title>
            ) : null}
            {children}
          </>
        )}
      </Box>
    </section>
  );
};
