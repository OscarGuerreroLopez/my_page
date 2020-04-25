import React from "react";
import { Flex, Text } from "rebass";

interface IProps {}

export const LogoCenter: React.FC<IProps> = () => {
  return (
    <Flex
      sx={{
        display: ["", "", "", "", "", "none", "none"],
        mt: [4, 4, "29px", "25px", "25px"],
      }}
    >
      <Text
        sx={{
          fontSize: [1, 2, 3, 4, 4, 5, 6],
        }}
      >
        Oscar Developer at work
      </Text>
    </Flex>
  );
};
