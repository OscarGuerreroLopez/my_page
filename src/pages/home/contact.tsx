import React from "react";
import { Flex, Text, Box, Card, Image } from "rebass";

import { CustomCard } from "../../components/customCard";
import { Content } from "../../components/cardContent";
import visionary from "./images/programming.svg";
import office from "./images/office.svg";
import worktogether from "./images/worktogether.svg";
import data from "./images/data.svg";
import feedback from "./images/feedback.svg";

interface IProps {
  onClick: () => void;
}

interface IStackImage {
  name: string;
  title: string;
}

const StackImages: React.FC<IStackImage> = ({ name, title }): JSX.Element => {
  return (
    <Flex
      sx={{
        witdth: ["33.3%"],
        ml: [2, 3, 3, 3, 2, 3, 4],
        mr: [2, 3, 3, 3, 2, 3, 4],
        mt: [2, 3, 3, 3, 2, 3, 4],
      }}
    >
      <Card width={[40, 60, 80, 100, 120, 140, 200]} mx="auto">
        <Image src={name} />
        <Text textAlign="center">{title}</Text>
      </Card>
    </Flex>
  );
};

export const Contact: React.FC<IProps> = ({ onClick }): JSX.Element => {
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      <Flex
        sx={{
          mt: [2, 2, 2, 3, 4, 4, 4],
          mb: [2, 2, 2, 3, 4, 4, 4],
          width: ["100%", "100%", "100%", "100%", "60%"],
        }}
      >
        <CustomCard
          // ml={["0", "0", "0", "0", "5", "6", "6"]}
          //   mb={["0", "0", "0", "0", "5", "6", "6"]}

          width="100%"
        >
          <Flex>
            <Card width={[256, 256, 300, 320, 350, 420, 550]} mx="auto">
              <Image src={office} />
            </Card>
          </Flex>
          <Text
            fontSize={[2, 2, 3, 3, 3, 5, 5]}
            fontWeight="bold"
            textAlign="center"
          >
            How can I help you?
          </Text>
          <Flex
            sx={{
              mt: [6],
              ml: [1, 1, 1, 1, 1, 3, 3],
              mr: [1, 1, 1, 1, 1, 3, 3],
            }}
          >
            <Card width="100%">
              <Flex flexWrap="wrap">
                <Flex width="30%" justifyContent="center">
                  <Card width={[80, 100, 120, 150, 175, 210, 225]} mx="auto">
                    <Image src={worktogether} />
                  </Card>
                </Flex>
                <Flex width="70%" justifyContent="center" flexWrap="wrap">
                  <Content
                    title={"Need help or advice on a project?"}
                    content={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    }
                  />
                </Flex>
              </Flex>
            </Card>
          </Flex>
          <Flex
            sx={{
              mt: [6],
              ml: [1, 1, 1, 1, 1, 3, 3],
              mr: [1, 1, 1, 1, 1, 3, 3],
            }}
          >
            <Card width="100%">
              <Flex flexWrap="wrap">
                <Flex width="70%" justifyContent="center" flexWrap="wrap">
                  <Content
                    title={"Don't know what to do with your data?"}
                    content={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    }
                  />
                </Flex>
                <Flex width="30%" justifyContent="center">
                  <Card width={[80, 100, 120, 150, 175, 210, 225]} mx="auto">
                    <Image src={data} />
                  </Card>
                </Flex>
              </Flex>
            </Card>
          </Flex>
          <Flex
            sx={{
              mt: [6],
              ml: [1, 1, 1, 1, 1, 3, 3],
              mr: [1, 1, 1, 1, 1, 3, 3],
            }}
          >
            <Card width="100%">
              <Flex flexWrap="wrap">
                <Flex width="30%" justifyContent="center">
                  <Card width={[80, 100, 120, 150, 175, 210, 225]} mx="auto">
                    <Image src={feedback} />
                  </Card>
                </Flex>
                <Flex width="70%" justifyContent="center" flexWrap="wrap">
                  <Content
                    title={"I am here to help other progress in their career"}
                    content={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    }
                  />
                </Flex>
              </Flex>
            </Card>
          </Flex>
        </CustomCard>
      </Flex>
    </Flex>
  );
};
