import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Loader from "../components/loader";
import Nav from "../pages/nav";
import Footer from "../pages/footer";
const Home = lazy(() => import("../pages/home"));
const NotFound = lazy(() => import("../pages/default/notFound"));
const Experience = lazy(() => import("../pages/work"));
const Contact = lazy(() => import("../pages/contact"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/contact" exact component={Contact} />

          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
