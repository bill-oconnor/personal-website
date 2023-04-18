import { createStyles } from "@mantine/core";

export const useStyles = createStyles((_theme, _params, _createRef) => ({
  bioSection: {
    width: "100%",
    // height: 60vh,
    minHeight: 400,
    backgroundColor: "#1f1f6d" /* fallback */,
    background:
      "rgba(0, 200, 255, 0.3) url(https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-dark.png)",
    backgroundBlendMode: "color-burn",
  },

  content: {
    height: "100%",
    maxHeight: "100%",
    overflowY: "auto",
  },
}));
