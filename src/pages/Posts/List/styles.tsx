import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      margin: "0 auto",
      maxWidth: "800px",
    },
    header: {
      margin: "0 0 25px 0",
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: "bold",
      letterSpacing: "1px",
    },
    articlesEndText: {
      color: theme.palette.text.secondary,
      margin: "15px auto",
      textAlign: "center",
    },
  })
);
