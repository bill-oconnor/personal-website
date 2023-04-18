import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  resourcesSection: {
    backgroundColor: "#ff5a00" /* fallback */,
    /* from https://colorgradient.dev/gradient-generator */
    backgroundSize: "100% 100%",
    backgroundPosition: "0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px",
    // backgroundImage: `radial-gradient(
    //   49% 81% at 45% 47%,
    //   #ffe20345 0%,
    //   #073aff00 100%
    // ),
    // radial-gradient(113% 91% at 17% -2%, #ff000000 1%, #ff5a00ff 99%),
    // radial-gradient(142% 91% at 83% 7%, #ffdb00ff 1%, #ff000000 99%),
    // radial-gradient(142% 91% at -6% 74%, #ff000000 1%, #ff0049ff 99%),
    // radial-gradient(142% 91% at 111% 84%, #ff4e00ff 0%, #ffc600ff 100%)`,
    backgroundImage: `radial-gradient(
      45% 64% at 95% 78%, #00ADFFFF 0%, #FF5A0000 100%
    ),
    radial-gradient(49% 81% at 45% 47%,
      #FFE20345 0%, #073AFF00 100%
      ),radial-gradient(
        113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%
      ),radial-gradient(
        142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%
      ),radial-gradient(
        142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%
      ),radial-gradient(
        142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%
      )`,
  },
}));
