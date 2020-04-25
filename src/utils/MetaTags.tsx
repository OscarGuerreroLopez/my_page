import React from "react";

import { Helmet } from "react-helmet";

interface IProps {}

export const MetaTags: React.FC<IProps> = (): JSX.Element => {
  return (
    <Helmet>
      <title>Oscar Software Developer</title>
      <meta name="description" content="Software Developer" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};
