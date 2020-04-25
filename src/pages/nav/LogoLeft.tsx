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
    <Box width={[1, 1, 0.75, 1, 1, 1 / 5, 1 / 7]} bg="red">
      <Image
        src={image}
        sx={{
          mt: [3, 3, 3, 2, 2, 2, 2],
          px: 1,
          ml: 2,
          height: [48, 48, 58, 68, 78, 88, 98],
          width: [48, 48, 58, 68, 78, 88, 98],
          bg: "blue",
          borderRadius: 9999,
        }}
      />
    </Box>
  );
};
