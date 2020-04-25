import React, { useEffect } from "react";
import { Flex, Box } from "rebass";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { MetaTags } from "../../utils/MetaTags";
import { AboutUs } from "./about";
import wave from "./images/wave.svg";

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
          <br />
          <Flex
            sx={{
              width: "100%",
            }}
            justifyContent="center"
          >
            <Box
              sx={{
                width: "100%",
                height: "400px",
                backgroundImage: `url(${wave})`,
                backgroundSize: "cover",
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
