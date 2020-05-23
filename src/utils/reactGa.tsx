import ReactGA from "react-ga";

ReactGA.initialize("UA-167450747-1");

export const ReactGa = (path: string): void => {
  ReactGA.pageview(path);
};
