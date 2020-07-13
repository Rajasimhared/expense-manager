import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardExpensePage from "../components/DashboardExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import PageNotFound from "../components/PageNotFound";

import Header from "../components/Header.js";

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={DashboardExpensePage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
