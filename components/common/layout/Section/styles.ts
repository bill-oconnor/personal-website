import { createStyles, CSSObject } from "@mantine/core";

export const useStyles = createStyles<"section", any>((theme, params) => {
  const styles: Record<"section", CSSObject> = {
    section: {
      width: "100vw",
      padding: "2rem",
      display: "flex",
      justifyContent: "center",

      "> *": {
        maxWidth: theme.other.contentWidth,
        width: "100%",
      },
    },
  };
  if (params.backgroundImage) {
    styles.section["backgroundImage"] = `url(${params.backgroundImage})`;
  }

  return styles;
});
