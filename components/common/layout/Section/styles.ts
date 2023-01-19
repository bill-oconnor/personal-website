import { createStyles, CSSObject } from "@mantine/core";

export const useStyles = createStyles<"section", any>((theme, params) => {
  const styles: Record<"section", CSSObject> = {
    section: {
      width: "100vw",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
      alignItems: "center",

      "> *": {
        maxWidth: theme.other.contentWidth,
        width: "100%",
      },
    },
  };
  if (params.background) {
    styles.section["background"] = params.background;
  }

  return styles;
});
