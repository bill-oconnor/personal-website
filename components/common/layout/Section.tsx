import { Title } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface IProps {
  title?: string;
}

export const Section: React.FC<PropsWithChildren<IProps>> = ({
  title,
  children,
}) => {
  return (
    <section className={classNames(styles.Section)}>
      {title ? <Title order={3}>{title}</Title> : null}
      {children}
    </section>
  );
};
