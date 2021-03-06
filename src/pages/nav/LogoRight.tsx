import React from "react";
import { Box, Image, Button, Flex, Text } from "rebass";
import { useThemeUI } from "theme-ui";

// import bars from "./images/bars.svg";
// import bars2 from "./images/bars2.svg";

interface IProps {
  displayLinks: boolean;
  setDisplayLinks: (displayLinks: boolean) => void;
}
export const LogoRight: React.FC<IProps> = ({
  displayLinks,
  setDisplayLinks,
}): JSX.Element => {
  const context = useThemeUI();
  const { colorMode } = context;
  return (
    <Flex sx={{ ml: ["auto"] }}>
      <Box
        sx={{
          ml: ["auto"],
          px: 2,
          py: 1,
          mt: [2, -1, -1, -1, 0],
          mb: 2,
          minWidth: "49px",
          minHeight: "49px",

          "@media screen and (min-width: 1024px)": {
            display: "none",
          },

          svg: {
            position: "relative",
            top: "2px",
          },
        }}
      >
        <Button
          variant="outline"
          mr={2}
          bg="inherit"
          sx={{
            mt: [2, 3, 3, 3, 3],
          }}
          onClick={() => {
            setDisplayLinks(!displayLinks);
          }}
        >
          <Image
            // src={colorMode === "dark" ? barsDark : barsLight}
            src={
              colorMode === "default"
                ? "https://ik.imagekit.io/zhu0vsy9dn/oscar_page/bars_4mm8hFc4utI.svg"
                : "https://ik.imagekit.io/zhu0vsy9dn/oscar_page/bars2_o7SK0Vejv_Jg.svg"
            }
            sx={{
              width: ["100%", "100%"],
            }}
            alt="Oscar Guerrero"
          />
        </Button>
      </Box>
      <Box
        sx={{
          "@media screen and (max-width: 1023px)": {
            display: "none",
          },
          px: 2,
          py: [1, 1, 1, 1, 1, "27px", "28px"],
        }}
      >
        <Text
          sx={{
            fontSize: [4, 4, 4, 4, 4, 4, 5],
          }}
        >
          Oscar Software Developer
        </Text>
      </Box>
    </Flex>
  );
};
