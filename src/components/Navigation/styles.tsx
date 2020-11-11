import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { TOP_NAV_HEIGHT } from "MaterialUIProvider";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topNav: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: `${TOP_NAV_HEIGHT}px`,
      boxShadow: theme.shadows[3],
      zIndex: 2,
      backgroundColor: theme.palette.background.default,
      "&  *": {
        color: theme.palette.primary.light,
      },
    },
    drawer: {
      padding: "0 20px",
    },
    linkItem: {
      height: "50px",
      "&:hover $link": {
        opacity: 1,
      },
      "&:hover $linkIcon": {
        opacity: 1,
        transform: "translateX(5px)",
      },
    },
    linkIcon: {
      opacity: 0.7,
      transition: ".1s linear opacity, .1s ease-in transform",
      color: theme.palette.primary.light,
    },
  })
);
