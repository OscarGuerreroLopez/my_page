import React, { useState } from "react";
import { Flex } from "rebass";

import { Links } from "./links";
import { LinksBellow } from "./linksBellow";
import { LogoLeft } from "./LogoLeft";
import { LogoRight } from "./LogoRight";
import logo from "./images/logo6.png";

interface IProps {}

const Nav: React.FC<IProps> = (): JSX.Element => {
  const linkArray = ["Nosotros", "Servicios", "Contacto", "Another"];
  const [displayLinks, setDisplayLinks] = useState(false);
  return (
    <>
      <Flex
        justifyContent="flex-start"
        sx={{
          maxHeight: "90px"
        }}
      >
        <Flex
          sx={{
            ml: ["left"],
            width: ["15%", "25%", "25%", "18%", "11%", "50%", "50%"]
          }}
        >
          <LogoLeft image={logo} />
          <Links links={linkArray} />
        </Flex>

        <LogoRight
          displayLinks={displayLinks}
          setDisplayLinks={setDisplayLinks}
        />
      </Flex>

      <LinksBellow links={linkArray} displayLinks={displayLinks} />
    </>
  );
};

export default Nav;
