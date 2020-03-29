import React from "react";
import { Box, Image } from "rebass";

interface IProps {
  image: string;
}
export const LogoLeft: React.FC<IProps> = ({ image }): JSX.Element => {
  return (
    <Box width={[1, 1, 1, 1, 1, 1 / 6, 1 / 8]}>
      <Image
        src={image}
        sx={{
          mt: 1,
          px: 1,
          height: ["100%"]
        }}
      />
    </Box>
  );
};
