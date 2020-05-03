import React, { useEffect } from "react";
import { Flex, Box } from "rebass";

import { MetaTags } from "../../utils/MetaTags";
import { First } from "./first";
import { Second } from "./second";
import wave from "./images/wave.svg";

interface IProps {}

const WorkExperience: React.FC<IProps> = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaTags />
      <Flex
        sx={{
          mt: 2,
          width: ["100%"],
        }}
        justifyContent="center"
        flexWrap="wrap"
      >
        <First />
        <Box
          sx={{
            width: ["100%"],
            // maxHeight: "400px",
            backgroundImage: [
              "",
              "",
              "",
              "",
              `url(${wave})`,
              `url(${wave})`,
              `url(${wave})`,
            ],
            backgroundSize: "cover",
          }}
        >
          <Flex justifyContent="center">
            <Second />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default WorkExperience;
