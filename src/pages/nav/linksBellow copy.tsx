import React from "react";
import { Flex, Box } from "rebass";
import { useThemeUI } from "theme-ui";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  links: string[];
  displayLinks: boolean;
}
export const LinksBellow: React.FC<IProps> = ({
  links,
  displayLinks
}): JSX.Element => {
  const context = useThemeUI();
  const { colorMode, setColorMode } = context;

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
