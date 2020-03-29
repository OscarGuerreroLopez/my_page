import React from "react";
import { Box, Image } from "rebass";
import { useThemeUI } from "theme-ui";

interface IProps {
  image: string;
}
export const LogoLeft: React.FC<IProps> = ({ image }): JSX.Element => {
  const context = useThemeUI();
  const { colorMode } = context;
  console.log("@@@", colorMode);

  return (
    <Box width={[1, 1, 1, 1, 1, 1 / 6, 1 / 8]}>
      <Image
        src={image}
        sx={{
          mt: 2,
          px: 1,
          height: ["80%"]
        }}
      />
    </Box>
  );
};
