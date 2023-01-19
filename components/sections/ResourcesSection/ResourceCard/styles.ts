import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  resourceCard: {
    cursor: "pointer",
    transition: "transform .2s",
    "&:hover": {
      boxShadow: theme.shadows["md"],
      transform: "translateY(-1px)",
    },
  },
}));
