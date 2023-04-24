import { createStyles, CSSObject } from "@mantine/core";
import breakpoints from "../../../../constants/breakpoints";

export const useStyles = createStyles<
  "section" | "sectionTitle",
  { background?: string; breakpoint: number }
>((theme, params) => {
  const styles: Record<"section" | "sectionTitle", CSSObject> = {
    section: {
      width: "100vw",
      padding:
        params.breakpoint >= breakpoints.LARGE
          ? "2rem"
          : params.breakpoint >= breakpoints.MEDIUM
          ? "0.8rem"
          : 0,
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
      alignItems: "center",

      "> *": {
        maxWidth: theme.other.contentWidth,
        width: "100%",
      },
    },
    sectionTitle:
      params.breakpoint === breakpoints.SMALL ||
      params.breakpoint === breakpoints.EXTRA_SMALL
        ? {
            color: theme.colors.dark[4],
            fontSize: "2.8rem",
            textAlign: "center",
          }
        : {
            color: theme.colors.gray[6],
          },
  };
  if (params.background) {
    styles.section["background"] = params.background;
  }

  return styles;
});
