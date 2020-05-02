import React from "react";
import { Flex, Text, Image, Box } from "rebass";
import { withRouter, RouteComponentProps } from "react-router-dom";

import arrowUp from "./images/arrowUp.svg";
import { useThemeUI } from "theme-ui";

interface IProps {}

interface ILink extends RouteComponentProps {
  text: string;
  link: string;
}

const Link = withRouter(({ text, link, history }: ILink) => {
  return (
    <Flex
      width="100%"
      sx={{
        justifyContent: "center",
        mt: [2, 3, 3, 3, 3, 3, 3],
        fontFamily: "chewy",
        cursor: "pointer",
        fontSize: [3, 4, 4, 5, 5, 5, 5],
      }}
      onClick={() => {
        history.push(link);
      }}
    >
      <Text>{text}</Text>
    </Flex>
  );
});

const Footer: React.FC<IProps> = (): JSX.Element => {
  const context = useThemeUI();
  const { colorMode } = context;

  return (
    <>
      <Flex
        //   color={colorMode === "default" ? null : "#EEEEEC"}
        flexWrap="wrap"
        sx={{
          mt: [4, 4, 4, 4, 4, 4, 4],
          bg: (theme) => `${colorMode === "default" ? "#EEEEEC" : "#342719"}`,
        }}
      >
        <Flex
          flexWrap="wrap"
          sx={{
            width: ["100%", "100%", "100%", "100%", "100%", "33.3%", "33.3%"],
          }}
        >
          <Link text={"Work Experience"} link={"/experience"} />
          <Link text={"Repos"} link={"/repos"} />
          <Link text={"Contact"} link={"/contact"} />
          <Link text={"Blog"} link={"/blog"} />
        </Flex>

        <Flex
          sx={{
            width: ["100%", "100%", "100%", "100%", "100%", "33.3%", "33.3%"],
            // mt: [2, 2, 2, 2, 2, 1, 1],
            justifyContent: "center",
          }}
        >
          <Image
            src={arrowUp}
            sx={{
              width: 58,
              height: 48,
              borderRadius: 9999,
              display: [
                "none",
                "none",
                "none",
                "none",
                "none",
                "inline",
                "inline",
              ],
            }}
            onClick={() => {
              try {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              } catch (error) {
                // just a fallback for older browsers
                window.scrollTo(0, 0);
              }
            }}
            alt="Oscar Guerrero"
          />
        </Flex>
        <Flex
          sx={{
            width: ["100%", "100%", "100%", "100%", "100%", "33.3%", "33.3%"],
            fontFamily: "Cambay",
            p: 4,
          }}
        >
          <Box fontSize={[3, 3, 3, 3, 3, 2, 2]} width={[1]}>
            <Flex width={[1]} justifyContent="center">
              <Text>Software Developer</Text>
            </Flex>
            <Flex width={[1]} justifyContent="center">
              <Text>Full Stack</Text>
            </Flex>
            <Flex width={[1]} justifyContent="center">
              <Text>React</Text>
            </Flex>
            <Flex width={[1]} justifyContent="center">
              <Text>Angular</Text>
            </Flex>
            <Flex width={[1]} justifyContent="center">
              <Text>Node js</Text>
            </Flex>
            <Flex width={[1]} justifyContent="center">
              <Text>TypeScript</Text>
            </Flex>
            <Flex width={[1]} justifyContent="center">
              <Text>Software Engineer</Text>
            </Flex>
          </Box>
        </Flex>
        <Flex
          sx={{
            width: ["100%", "100%", "100%", "100%", "100%", "33%", "33%"],
            mt: [2, 2, 2, 2, 2, 1, 1],
            justifyContent: "center",
          }}
        >
          <Image
            src={arrowUp}
            sx={{
              width: 58,
              height: 48,
              borderRadius: 9999,
              display: [
                "inline",
                "inline",
                "inline",
                "inline",
                "inline",
                "none",
                "none",
              ],
            }}
            onClick={() => {
              try {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              } catch (error) {
                // just a fallback for older browsers
                console.log("@@@@", error);

                window.scrollTo(0, 0);
              }
            }}
            alt="Oscar Guerrero"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
