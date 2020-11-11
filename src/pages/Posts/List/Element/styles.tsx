import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      padding: "15px",
      "&:hover": {
        boxShadow: theme.shadows[5],
      },
    },
    image: {
      height: "100%",
      "& > img": {
        width: "100%",
        height: "auto",
      },
    },
    link: {
      marginTop: "5px",
      display: "block",
      fontWeight: "bold",
      color: theme.palette.text.primary,
      textDecoration: "none",
      fontSize: ".95rem",
    },
    excerpt: {
      display: "block",
      margin: "15px 0 ",
      fontSize: ".9rem",
      color: theme.palette.text.secondary,
    },
    date: {
      fontWeight: "bold",
      color: theme.palette.primary.light,
      fontSize: ".8rem",
      textAlign: "right",
    },
  })
);
