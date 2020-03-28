/** @jsx jsx */
import React from "react";
import { Text, Flex, Box, Heading, Button } from "rebass";
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";
import { Styled } from "theme-ui";

interface IProps {}

const Home: React.FC<IProps> = (): JSX.Element => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div>
      <br />
      <br />
      <Box
        sx={{
          display: "grid",
          gridGap: 5,
          gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))"
        }}
      >
        <Heading p={5} bg="muted">
          Hello
        </Heading>
        <Box p={3} color="background" bg="primary">
          CSS Grid
        </Box>
      </Box>
      <Flex>
        <Text as="h1" sx={{ background: "orange" }}>
          HOME
        </Text>

        <Text
          sx={{
            color: "oscar",
            fontSize: 5,
            fontFamily: "body",
            background: "yellow"
          }}
        >
          Hola
        </Text>
      </Flex>
      <br />
      <Flex bg="green">
        <Box
          sx={{
            bg: "lightgray",
            fontFamily: "body",
            // raw CSS value
            boxShadow: "0 0 1px 3px rgba(0, 0, 0, .125)",
            width: ["100%", "50%", "10%"]
          }}
        >
          Inside
        </Box>
        <Box
          sx={{
            bg: "lightgray",
            fontFamily: "body",
            // raw CSS value
            boxShadow: theme => `0 0 28px ${theme.colors.oscar}`,

            width: ["100%", "50%", "25%"],
            px: 3, // padding-left & padding-right
            // paddingX: 3 will also work
            py: 24, // padding-top & padding-bottom
            mb: 3, // margin-bottom
            fontSize: [12, 18, 48]
          }}
        >
          Inside2
        </Box>
        <Box>
          <Button
            onClick={e => {
              setColorMode(colorMode === "default" ? "dark" : "default");
            }}
          >
            Toggle {colorMode === "default" ? "Dark" : "Light"}
          </Button>
        </Box>
      </Flex>
      <Flex
        sx={{
          justifyContent: "center",
          variant: "osquitar.secondary"
        }}
      >
        <Styled.h1 as="div">Hello, styled heading!</Styled.h1>
      </Flex>
    </div>
  );
};

export default Home;
