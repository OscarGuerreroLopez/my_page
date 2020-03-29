import React from "react";
import { Flex, Text } from "rebass";

interface IProps {
  links: string[];
}
export const Links: React.FC<IProps> = ({ links }): JSX.Element => {
  return (
    <>
      {links.map((link: string) => (
        <Flex
          sx={{
            px: 2,
            py: 4,
            height: ["100%"],
            "@media screen and (max-width: 1023px)": {
              display: "none"
            }
          }}
        >
          <Text>{link}</Text>
        </Flex>
      ))}
    </>
  );
};
