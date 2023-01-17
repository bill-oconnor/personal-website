import { CSSObject, Title } from "@mantine/core";
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
      {title ? <Title order={3}>{title}</Title> : null}
      {children}
    </section>
  );
};
