import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Loader } from "../components/loader";
import Nav from "../pages/nav";
import Notfound from "../pages/default/notFound";

const Home = lazy(() => import("../pages/home"));
const NotFound = lazy(() => import("../pages/default/notFound"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route component={Notfound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
