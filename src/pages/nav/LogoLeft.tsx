import React from "react";
import { Box, Image } from "rebass";

interface IProps {
  image: string;
  onClick: () => void;
}
export const LogoLeft: React.FC<IProps> = ({ image, onClick }): JSX.Element => {
  return (
    <Box width={[1, 1, 0.75, 1, 1, 1 / 5, 1 / 7]}>
      <Image
        src={image}
        sx={{
          mt: [3, 3, 3, 2, 2, 2, 2],
          px: 1,
          ml: 2,
          height: [48, 48, 58, 68, 78, 88, 98],
          width: [48, 48, 58, 68, 78, 88, 98],
          borderRadius: 9999,
        }}
        onClick={() => onClick()}
        alt="Oscar Guerrero"
      />
    </Box>
  );
};
