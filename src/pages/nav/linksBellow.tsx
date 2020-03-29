import React from "react";
import { Flex, Box } from "rebass";

interface IProps {
  links: string[];
  displayLinks: boolean;
  colorMode: string;
  setColorMode: (colorMode: string) => void;
}
export const LinksBellow: React.FC<IProps> = ({
  links,
  displayLinks,
  colorMode,
  setColorMode
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
      {displayLinks && (
        <Flex
          justifyContent="center"
          sx={{
            cursor: "pointer",
            "@media screen and (min-width: 1023px)": {
              display: "none"
            }
          }}
          onClick={() => {
            setColorMode(colorMode === "default" ? "dark" : "default");
          }}
        >
          <Box>Modo {colorMode === "default" ? "Oscuro" : "Claro"}</Box>
        </Flex>
      )}
    </>
  );
};
