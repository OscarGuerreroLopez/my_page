import React from "react";
import { Box, Image, Button } from "rebass";

import bars from "./images/bars.svg";

interface IProps {}
export const LogoRight: React.FC<IProps> = (): JSX.Element => {
  return (
    <Box
      sx={{
        ml: ["auto"],
        px: 2,
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
        bg="yellow"
        sx={{
          mt: 2
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
  );
};
