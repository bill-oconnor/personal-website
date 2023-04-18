import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  resourceDetailCard: {
    padding: theme.spacing["lg"],
    borderColor: theme.colors.orange[3],
    boxShadow: `0 0 12px 4px ${theme.colors.orange[9]}`,
    marginBottom: "3rem",
  },
}));
