import React, { useEffect } from "react";
import { Flex, Box } from "rebass";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { MetaTags } from "../../utils/MetaTags";
import { AboutUs } from "./about";
import { Tech } from "./tech";
import { Goodies } from "./goodies";
import { Contact } from "./contact";
// import wave from "./images/wave.svg";
// import wave3 from "./images/wave3.svg";
// import wave4 from "./images/wave4.svg";
// import wave5 from "./images/wave5.svg";

interface IProps extends RouteComponentProps {}

const Home = withRouter(
  ({ history }: IProps): JSX.Element => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const clickedContact = () => {
      history.push("/");
    };

    return (
      <>
        <MetaTags />

        <Flex
          sx={{
            mt: 3,
            width: ["100%"],
          }}
          justifyContent="center"
        >
          <Box
            sx={{
              width: ["100%"],
              // maxHeight: "400px",
              backgroundImage: [
                "",
                "",
                "",
                "",
                `url(https://ik.imagekit.io/zhu0vsy9dn/oscar_page/wave_MC1MgdxxUhX.svg)`,
                `url(https://ik.imagekit.io/zhu0vsy9dn/oscar_page/wave_MC1MgdxxUhX.svg)`,
                `url(https://ik.imagekit.io/zhu0vsy9dn/oscar_page/wave_MC1MgdxxUhX.svg)`,
              ],
              backgroundSize: "cover",
            }}
          >
            <AboutUs />
          </Box>
        </Flex>

        <Flex
          sx={{
            mt: [2, 4, 4, 4, -1],
          }}
          justifyContent="center"
        >
          <Box
            sx={{
              width: ["100%"],
              // maxHeight: "400px",
              backgroundImage: [
                "",
                "",
                "",
                "",
                `url(https://ik.imagekit.io/zhu0vsy9dn/oscar_page/wave4__D3wG4dbZslo.svg)`,
                `url(https://ik.imagekit.io/zhu0vsy9dn/oscar_page/wave4__D3wG4dbZslo.svg)`,
                `url(https://ik.imagekit.io/zhu0vsy9dn/oscar_page/wave4__D3wG4dbZslo.svg)`,
              ],
              backgroundSize: "cover",
            }}
          >
            <Tech />
          </Box>
        </Flex>
        <Flex
          sx={{
            mt: 3,
            width: ["100%"],
          }}
          justifyContent="center"
        >
          <Box
            sx={{
              width: ["100%"],
              // maxHeight: "400px",
              backgroundImage: [
                "",
                "",
                "",
                "",
                `url(https://ik.imagekit.io/zhu0vsy9dn/oscar_page/wave3_WF1KEqsQJhQc.svg)`,
                `url(https://ik.imagekit.io/zhu0vsy9dn/oscar_page/wave3_WF1KEqsQJhQc.svg)`,
                `url(https://ik.imagekit.io/zhu0vsy9dn/oscar_page/wave3_WF1KEqsQJhQc.svg)`,
              ],
              backgroundSize: "cover",
            }}
          >
            <Goodies />
          </Box>
        </Flex>
        <Flex
          sx={{
            mt: [3, 4, 4, 4, -2],
          }}
          justifyContent="center"
          flexWrap="wrap"
        >
          <Box
            sx={{
              width: ["100%"],
              minHeight: ["0px", "0px", "0px", "0px", "120px", "150px"],
              backgroundImage: [
                "",
                "",
                "",
                "",
                `url(https://ik.imagekit.io/zhu0vsy9dn/oscar_page/wave5_dSblOKXZPndy.svg)`,
                `url(https://ik.imagekit.io/zhu0vsy9dn/oscar_page/wave5_dSblOKXZPndy.svg)`,
                `url(https://ik.imagekit.io/zhu0vsy9dn/oscar_page/wave5_dSblOKXZPndy.svg)`,
              ],
              backgroundSize: "cover",
              backgroundColor: "grey",
            }}
          />
          <Flex width="100%" mt={[2, 2, 3, 3, -100, -190]}>
            <Contact onClick={clickedContact} />
          </Flex>
        </Flex>
      </>
    );
  },
);

export default Home;
