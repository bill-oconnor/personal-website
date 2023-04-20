import { createStyles } from "@mantine/core";

export const useStyles = createStyles((_theme, _params, _createRef) => ({
  heroSection: {
    // backgroundColor: "#ff5a00" /* fallback */,
    // /* from https://colorgradient.dev/gradient-generator */
    // backgroundSize: "100% 100%",
    // backgroundPosition: "0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px",
    // backgroundImage: `radial-gradient(
    //   49% 81% at 45% 47%,
    //   #ffe20345 0%,
    //   #073aff00 100%
    // ),
    // radial-gradient(113% 91% at 17% -2%, #ff000000 1%, #ff5a00ff 99%),
    // radial-gradient(142% 91% at 83% 7%, #ffdb00ff 1%, #ff000000 99%),
    // radial-gradient(142% 91% at -6% 74%, #ff000000 1%, #ff0049ff 99%),
    // radial-gradient(142% 91% at 111% 84%, #ff4e00ff 0%, #ffc600ff 100%)`,

    backgroundColor: "#1f1f6d" /* fallback */,
    background:
      "rgba(0, 200, 255, 0.3) url(https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-dark.png)",
    backgroundBlendMode: "color-burn",

    width: "100vw",

    position: "relative",
    // paddingBottom: "20vh",
    // paddingTop: "14vh",
    minHeight: "80vh",
  },
  content: {
    color: _theme.colors.orange[4],
    background: `radial-gradient(rgba(10, 13, 14, 0.8) 50%, rgba(25, 28, 54, 0) 70%)`,
    borderRadius: "50%",
  },
  imageContainer: {
    borderRadius: "50%",
    height: 164,
    width: 164,
    overflow: "hidden",
  },
}));
