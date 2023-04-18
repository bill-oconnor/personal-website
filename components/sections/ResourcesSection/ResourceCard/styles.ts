import { createStyles } from "@mantine/core";

export const useStyles = createStyles<"resourceCard", { selected: boolean }>(
  (theme, params) => ({
    resourceCard: {
      cursor: "pointer",
      transition: "transform .2s",
      "&:hover": {
        boxShadow: params.selected
          ? `0 1px 8px 2px ${theme.colors.orange[6]}`
          : `0 1px 8px 2px ${theme.colors.blue[6]}77`,
        transform: "translateY(-1px)",
      },
      borderColor: params.selected
        ? theme.colors.orange[3]
        : theme.colors.blue[3],
      boxShadow: params.selected
        ? `0 0 8px 2px ${theme.colors.orange[6]}`
        : `0 0 8px 2px ${theme.colors.blue[6]}77`,
    },
  })
);
