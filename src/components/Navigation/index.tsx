import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import {
  Brightness5,
  Brightness4,
  MenuOutlined,
  Home,
} from "@material-ui/icons";
import { useStyles } from "./styles";
import * as routes from "constants/routesURL";

export interface MainNavigationData {
  text: string;
  to: string;
  icon: JSX.Element;
}

export const navData: MainNavigationData[] = [
  { text: "Posts", to: routes.POSTS_ROUTE, icon: <Home /> },
  { text: "Example 2", to: "/example2", icon: <Home /> },
  { text: "Example 3", to: "/example3", icon: <Home /> },
];

export interface MainNavigationProps {
  handleDarkMode: () => void;
  darkMode: boolean;
}

const MainNavigation: React.FunctionComponent<MainNavigationProps> = ({
  darkMode,
  handleDarkMode,
}) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };

  const classes = useStyles();

  return (
    <div className={classes.topNav}>
      <div>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuOutlined />
        </IconButton>
        <IconButton onClick={handleDarkMode}>
          {darkMode ? <Brightness4 /> : <Brightness5 />}
        </IconButton>
      </div>

      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          className={classes.drawer}
          role="navigation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navData.map(({ text, to, icon }) => (
              <ListItem
                to={to}
                key={text}
                component={Link}
                button
                className={classes.linkItem}
              >
                <ListItemIcon className={classes.linkIcon}>{icon}</ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default MainNavigation;
