import { createStyles } from "@mantine/core";

export const useStyles = createStyles((_theme, _params, _createRef) => ({
  bioSection: {
    width: "100%",
    // height: 60vh,
    minHeight: 400,

    border: "1px solid red",

    "& > div": {
      height: "100%",
    },
  },

  content: {
    height: "100%",
    maxHeight: "100%",
    overflowY: "auto",
  },
}));