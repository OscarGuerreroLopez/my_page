import React from "react";
import { Flex, Text } from "rebass";
import { useThemeUI } from "theme-ui";

interface IProps {
  links: string[];
}
export const Links: React.FC<IProps> = ({ links }): JSX.Element => {
  const context = useThemeUI();
  const { colorMode, setColorMode } = context;

  return (
    <>
      {links.map((link: string) => (
        <Flex
          sx={{
            px: 2,
            py: 4,
            height: ["100%"],
            cursor: "pointer",
            "@media screen and (max-width: 1023px)": {
              display: "none"
            }
          }}
        >
          <Text>{link}</Text>
        </Flex>
      ))}
      <Flex
        sx={{
          px: 2,
          py: 4,
          height: ["100%"],
          cursor: "pointer",
          "@media screen and (max-width: 1023px)": {
            display: "none"
          }
        }}
        onClick={() => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      >
        <Text>Modo {colorMode === "default" ? "Oscuro" : "Claro"}</Text>
      </Flex>
    </>
  );
};
