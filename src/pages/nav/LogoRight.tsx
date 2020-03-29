import React from "react";
import { Box, Image, Button, Flex, Text } from "rebass";

import bars from "./images/bars.svg";

interface IProps {
  displayLinks: boolean;
  setDisplayLinks: (displayLinks: boolean) => void;
}
export const LogoRight: React.FC<IProps> = ({
  displayLinks,
  setDisplayLinks
}): JSX.Element => {
  return (
    <Flex sx={{ ml: ["auto"] }}>
      <Box
        sx={{
          ml: ["auto"],
          px: 2,
          py: 1,
          mt: 0,
          mb: 2,
          minWidth: "49px",
          minHeight: "49px",
          "@media screen and (min-width: 1024px)": {
            display: "none"
          },

          svg: {
            position: "relative",
            top: "2px"
          }
        }}
      >
        <Button
          variant="outline"
          mr={2}
          bg="#DCDCDA"
          sx={{
            mt: 3
          }}
          onClick={() => {
            setDisplayLinks(!displayLinks);
          }}
        >
          <Image
            src={bars}
            sx={{
              width: ["100%", "100%"]
            }}
          />
        </Button>
      </Box>
      <Box
        sx={{
          "@media screen and (max-width: 1023px)": {
            display: "none"
          },
          px: 2,
          py: 4
        }}
      >
        <Text>Que chulo esta mierda</Text>
      </Box>
    </Flex>
  );
};
