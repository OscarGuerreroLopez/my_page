import React, { useState } from "react";
import { Flex } from "rebass";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { Links } from "./links";
import { LinksBellow } from "./linksBellow";
import { LogoLeft } from "./LogoLeft";
import { LogoRight } from "./LogoRight";
import { LogoCenter } from "./LogoCenter";
import oscar from "./images/Oscar.jpg";

import { useThemeUI } from "theme-ui";

interface IProps extends RouteComponentProps {}

const Nav = withRouter(
  ({ history }: IProps): JSX.Element => {
    const [displayLinks, setDisplayLinks] = useState(false);
    const context = useThemeUI();
    const { colorMode } = context;
    const linksObject: IObjectLiteral = {
      [`About me`]: "about",
      [`Work Experience`]: "experience",
      Contact: "contact",
      Repos: "repos",
      Blog: "blog",
    };

    const onClickLink = (link: string) => {
      history.push(`${linksObject[link]}`);
    };

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
            }}
          >
            <LogoLeft image={oscar} />
            <Links linksObject={linksObject} onClick={onClickLink} />
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

        <LinksBellow
          linksObject={linksObject}
          displayLinks={displayLinks}
          onClick={onClickLink}
          setDisplayLinks={setDisplayLinks}
        />
      </>
    );
  },
);

export default Nav;
