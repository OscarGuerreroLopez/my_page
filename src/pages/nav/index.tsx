import React from "react";
import { Flex, Box, Text, Button, Image } from "rebass";
import bars from "../../components/images/bars.svg";

interface IProps {}

const Nav: React.FC<IProps> = (): JSX.Element => {
  return (
    <Flex
      mx={-2}
      alignItems="center"
      justifyContent="flex-start"
      sx={{
        position: "relative",
        bg: "red"
      }}
    >
      <Box width={1 / 2} px={2}>
        <Text p={1} color="background" bg="orange">
          Shit
        </Text>
      </Box>
      <Box
        sx={{
          ml: ["auto"],
          px: 2,
          mt: 4,
          mb: 2,
          minWidth: "49px",
          minHeight: "49px",

          svg: {
            position: "relative",
            top: "2px"
          }
        }}
      >
        <Button variant="outline" mr={2}>
          <Image
            src={bars}
            sx={{
              width: ["100%", "100%"]
            }}
          />
        </Button>
      </Box>
    </Flex>
  );
};

export default Nav;
