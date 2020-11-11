import React from "react";
import { Switch, Route } from "react-router-dom";
import * as routes from "constants/routesURL";
import { NotFoundPage } from "./other";
import ArticlesListPage from "./Posts/List";

const AppRouter: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path={routes.POSTS_ROUTE} component={ArticlesListPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default AppRouter;
