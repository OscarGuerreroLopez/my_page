import React from "react";
import { Flex, Text, Box } from "rebass";

interface IProps {
  links: string[];
  displayLinks: boolean;
}
export const LinksBellow: React.FC<IProps> = ({
  links,
  displayLinks
}): JSX.Element => {
  console.log("@@@@", displayLinks);

  return (
    <>
      {displayLinks &&
        links.map((link: string) => (
          <Flex
            justifyContent="center"
            sx={{
              "@media screen and (min-width: 1023px)": {
                display: "none"
              }
            }}
          >
            <Box>{link}</Box>
          </Flex>
        ))}
    </>
  );
};
