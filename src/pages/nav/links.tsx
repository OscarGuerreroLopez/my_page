import React from "react";
import { Flex, Text } from "rebass";

interface IProps {}
export const Links: React.FC<IProps> = ({ children }): JSX.Element => {
  return (
    <Flex
      sx={{
        px: 2,
        py: 4,
        "@media screen and (max-width: 1024px)": {
          display: "none"
        }
      }}
      bg="yellow"
    >
      <Text>{children}</Text>
    </Flex>
  );
};
