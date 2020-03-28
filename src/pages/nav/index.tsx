import React from "react";
import { Flex, Box, Button, Image } from "rebass";

import { Links } from "./links";
import { LogoLeft } from "./LogoLeft";
import { LogoRight } from "./LogoRight";
import bars from "./images/bars.svg";
import logo from "./images/logo6.png";

interface IProps {}

const Nav: React.FC<IProps> = (): JSX.Element => {
  return (
    <Flex
      justifyContent="flex-start"
      sx={{
        position: "relative",
        bg: "blue"
      }}
    >
      <Flex
        sx={{
          ml: ["left"],
          bg: "orange"
        }}
      >
        <LogoLeft image={logo} />

        <Links>Hola</Links>
        <Links>Another</Links>
      </Flex>

      <LogoRight />
    </Flex>
  );
};

export default Nav;
