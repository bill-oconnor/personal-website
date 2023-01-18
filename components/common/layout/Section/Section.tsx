import { Box, CSSObject, Paper, Title } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import { useStyles } from "./styles";

interface IProps extends React.HTMLProps<HTMLDivElement> {
  title?: string;
  backgroundImage?: string;
  styleParams?: CSSObject;
  className?: string;
}

export const Section: React.FC<PropsWithChildren<IProps>> = ({
  title,
  children,
  styleParams = {},
  className,
  backgroundImage,
  ...htmlProps
}) => {
  const { classes } = useStyles({ backgroundImage });
  const wrapped = (section: JSX.Element) => {
    if (className) {
      return <div className={className}>{section}</div>;
    } else {
      return <>{section}</>;
    }
  };

  return wrapped(
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
        {title ? (
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
            <Title className="section-title" order={3} mb="md">
              {title}
            </Title>
            {children}
          </Paper>
        ) : (
          children
        )}
      </Box>
    </section>
  );
};
