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
    <Flex>
      <Heading p={5} bg="muted">
        Hello
      </Heading>
    </Flex>
  );
};

export default Home;
