import React, { useState } from "react";
import { Flex } from "rebass";

import { Links } from "./links";
import { LinksBellow } from "./linksBellow";
import { LogoLeft } from "./LogoLeft";
import { LogoRight } from "./LogoRight";
import { LogoCenter } from "./LogoCenter";
import oscar from "./images/Oscar.jpg";

import { useThemeUI } from "theme-ui";

interface IProps {}

const Nav: React.FC<IProps> = (): JSX.Element => {
  const linkArray = ["About me", "Work Experience", "Contact", "Repos", "Blog"];
  const [displayLinks, setDisplayLinks] = useState(false);
  const context = useThemeUI();
  const { colorMode } = context;
  return (
    <>
      <Flex
        justifyContent="flex-start"
        sx={{
          maxHeight: "90px",
          color: (theme) => `${colorMode === "dark" ? "#3383FF" : null}`,
          // bg: (theme) => `${colorMode === "default" ? "#EEEEEC" : null}`,
        }}
      >
        <Flex
          sx={{
            ml: ["left"],
            width: ["20%", "15%", "20%", "18%", "11%", "60%", "60%"],
            bg: "yellow",
          }}
        >
          <LogoLeft image={oscar} />
          <Links links={linkArray} />
        </Flex>
        <Flex
          sx={{
            ml: ["auto"],
          }}
        >
          <LogoCenter />
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
