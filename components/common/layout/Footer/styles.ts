import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  footer: {
    display: "flex",
    flex: 1,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.dark[9],
    color: theme.colors.dark[4],

    "& a": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
    },
  },
}));
