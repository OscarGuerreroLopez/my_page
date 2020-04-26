import React from "react";
import { Flex, Text } from "rebass";
import { useThemeUI } from "theme-ui";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  linksObject: IObjectLiteral;
  onClick: (link: string) => void;
}
export const Links: React.FC<IProps> = ({
  linksObject,
  onClick,
}): JSX.Element => {
  const context = useThemeUI();
  const { colorMode, setColorMode } = context;

  const links = Object.keys(linksObject);
  const fontSizeArray = [4, 4, 4, 4, 4, "15px", "20px"];

  return (
    <>
      <Flex
        sx={{
          height: ["100%"],
          cursor: "pointer",
          "@media screen and (max-width: 1023px)": {
            display: "none",
          },
        }}
      >
        {links.map((link: string) => {
          const index = uuidv4();
          return (
            <Text
              sx={{
                px: 2,
                py: [1, 1, 1, 1, 1, 4, 4],
                fontSize: fontSizeArray,
              }}
              key={index}
              onClick={() => {
                onClick(link);
              }}
            >
              {link}
            </Text>
          );
        })}
        <Text
          sx={{
            px: 2,
            py: [1, 1, 1, 1, 1, 4, 4],
            fontSize: fontSizeArray,
          }}
          onClick={() => {
            setColorMode(colorMode === "default" ? "dark" : "default");
          }}
        >
          {colorMode === "default" ? "Dark" : "Light"} Theme
        </Text>
      </Flex>
    </>
  );
};
