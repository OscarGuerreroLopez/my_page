import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Loader } from "../components/loader";
import Nav from "../pages/nav";

const Home = lazy(() => import("../pages/home"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
