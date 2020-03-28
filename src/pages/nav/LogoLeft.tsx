import React from "react";
import { Box, Image } from "rebass";

interface IProps {
  image: string;
}
export const LogoLeft: React.FC<IProps> = ({ image }): JSX.Element => {
  return (
    <Box width={1 / 4} bg="red">
      <Image
        src={image}
        sx={{
          width: ["100%", "100%", "100%", "100%", "100%", "100%"],
          mt: 2
        }}
      />
    </Box>
  );
};
