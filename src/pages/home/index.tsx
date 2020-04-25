import React, { useEffect } from "react";
import { Flex, Box } from "rebass";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { MetaTags } from "../../utils/MetaTags";
import { AboutUs } from "./about";
import wave from "./images/wave.svg";
import wave2 from "./images/wave2.svg";

interface IProps extends RouteComponentProps {}

const Home = withRouter(
  ({ history }: IProps): JSX.Element => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const clickedAbout = () => {
      history.push(`/about`);
    };

    return (
      <>
        <MetaTags />

        <Flex>
          <Flex
            sx={{
              mt: 3,
            }}
            justifyContent="center"
          >
            <Box
              sx={{
                width: "100%",
                minHeight: "200px",
                backgroundImage: [
                  "",
                  "",
                  "",
                  "",
                  `url(${wave})`,
                  `url(${wave})`,
                  `url(${wave})`,
                ],
                backgroundSize: "cover",
                // bg: "grey",
              }}
            >
              <AboutUs onClick={clickedAbout} />
            </Box>
          </Flex>
        </Flex>
        <Flex>
          <Flex
            sx={{
              mt: 3,
            }}
            justifyContent="center"
          >
            <Box
              sx={{
                width: "100%",
                minHeight: "200px",
                backgroundImage: [
                  "",
                  "",
                  "",
                  "",
                  `url(${wave2})`,
                  `url(${wave2})`,
                  `url(${wave2})`,
                ],
                backgroundSize: "cover",
                // bg: "grey",
              }}
            >
              <AboutUs onClick={clickedAbout} />
            </Box>
          </Flex>
        </Flex>
      </>
    );
  },
);

export default Home;
