import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  resourcesSection: {
    backgroundColor: "#ff5a00" /* fallback */,
    /* from https://colorgradient.dev/gradient-generator */
    backgroundSize: "100% 100%",
    backgroundPosition: "0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px",
    backgroundImage: `radial-gradient(
      49% 81% at 45% 47%,
      #ffe20345 0%,
      #073aff00 100%
    ),
    radial-gradient(113% 91% at 17% -2%, #ff000000 1%, #ff5a00ff 99%),
    radial-gradient(142% 91% at 83% 7%, #ffdb00ff 1%, #ff000000 99%),
    radial-gradient(142% 91% at -6% 74%, #ff000000 1%, #ff0049ff 99%),
    radial-gradient(142% 91% at 111% 84%, #ff4e00ff 0%, #ffc600ff 100%)`,
  },
}));
