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
  ...htmlProps
}) => {
  const { classes } = useStyles(styleParams);

  return (
    <section
      className={classNames([classes.section, className].filter((i) => !!i))}
      id={title}
    >
      <Box p="xs">
        {title ? (
          <Paper p="xs">
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