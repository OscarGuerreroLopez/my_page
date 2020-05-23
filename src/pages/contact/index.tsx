import React, { useEffect, useState } from "react";
import { Flex, Box } from "rebass";

import { MetaTags } from "../../utils/MetaTags";
// import tour from "./tour.jpg";
import { ContactCard } from "./contactCard";

import { ReactGa } from "../../utils/reactGa";

interface IProps {}

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Contact = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGa(window.location.pathname + window.location.search);

    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <MetaTags />
      <Flex
        justifyContent="center"
        flexWrap="wrap"
        mt={["0", "0", "0", "0", "0", "4"]}
        width={windowDimensions.width}
        height={windowDimensions.height}
      >
        <Box
          sx={{
            width: ["100%"],
            height: ["100%"],
            backgroundImage: [
              `url(https://ik.imagekit.io/zhu0vsy9dn/oscar_page/tour_0MWafNWzAbz.jpg)`,
            ],
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repat",
            // filter: "grayscale(100%)",
          }}
        >
          <Flex justifyContent="center">
            <ContactCard />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
