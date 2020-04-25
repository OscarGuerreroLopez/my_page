import React from "react";
import { Flex, Box, Text } from "rebass";
import { useThemeUI } from "theme-ui";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  linksObject: IObjectLiteral;
  displayLinks: boolean;
  onClick: (link: string) => void;
  setDisplayLinks: (displayLinks: boolean) => void;
}
export const LinksBellow: React.FC<IProps> = ({
  linksObject,
  displayLinks,
  onClick,
  setDisplayLinks,
}): JSX.Element => {
  const context = useThemeUI();
  const { colorMode, setColorMode } = context;

  const links = Object.keys(linksObject);

  return (
    <>
      {displayLinks &&
        links.map((link: string) => {
          const index = uuidv4();
          return (
            <Flex
              justifyContent="center"
              sx={{
                "@media screen and (min-width: 1023px)": {
                  display: "none",
                },
                color: (theme) => `${colorMode === "dark" ? "#3383FF" : null}`,
                // bg: (theme) => `${colorMode === "default" ? "#EEEEEC" : null}`,
              }}
              key={index}
            >
              <Text
                sx={{ fontSize: [4, 5, 5, 5, 6, 4, 4] }}
                onClick={() => {
                  onClick(link);

                  setDisplayLinks(!displayLinks);
                }}
              >
                {link}
              </Text>
            </Flex>
          );
        })}
      {displayLinks && (
        <Flex
          justifyContent="center"
          sx={{
            cursor: "pointer",
            "@media screen and (min-width: 1023px)": {
              display: "none",
            },
            color: (theme) => `${colorMode === "dark" ? "#3383FF" : null}`,
            // bg: (theme) => `${colorMode === "default" ? "#EEEEEC" : null}`,
          }}
          onClick={() => {
            setColorMode(colorMode === "default" ? "dark" : "default");
            setDisplayLinks(!displayLinks);
          }}
        >
          <Text sx={{ fontSize: [4, 5, 5, 5, 6, 4, 4] }}>
            {colorMode === "default" ? "Dark" : "Light"} Theme
          </Text>
        </Flex>
      )}
    </>
  );
};
