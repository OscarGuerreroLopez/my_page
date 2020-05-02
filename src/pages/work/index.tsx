import React from "react";
import { Flex, Box } from "rebass";

import { MetaTags } from "../../utils/MetaTags";
import { First } from "./first";

interface IProps {}

const WorkExperience: React.FC<IProps> = (): JSX.Element => {
  return (
    <>
      <MetaTags />
      <Flex
        sx={{
          mt: 4,
          width: ["100%"],
        }}
        justifyContent="center"
      >
        <First />
      </Flex>
    </>
  );
};

export default WorkExperience;
