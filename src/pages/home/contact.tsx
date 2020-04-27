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

export const Contact: React.FC<IProps> = ({ onClick }): JSX.Element => {
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      <Flex
        sx={{
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
              mt: [4],
              ml: [1, 1, 1, 1, 1, 3, 3],
              mr: [1, 1, 1, 1, 1, 3, 3],
            }}
          >
            <Card width="100%">
              <Flex flexWrap="wrap">
                <Flex width="35%" justifyContent="center" mt={[2]}>
                  <Card width={[80, 150, 120, 150, 175, 210, 225]} mx="auto">
                    <Image src={worktogether} />
                  </Card>
                </Flex>
                <Flex width="65%" justifyContent="center" flexWrap="wrap">
                  <Content
                    title={"Need help or advice on a project?"}
                    content={
                      "I offer consultancy services for any type of companies looking to implement or improve their technology stack. Contact me if you need help."
                    }
                  />
                </Flex>
              </Flex>
            </Card>
          </Flex>
          <Flex
            sx={{
              mt: [4],
              ml: [1, 1, 1, 1, 1, 3, 3],
              mr: [1, 1, 1, 1, 1, 3, 3],
            }}
          >
            <Card width="100%">
              <Flex flexWrap="wrap">
                <Flex width="65%" justifyContent="center" flexWrap="wrap">
                  <Content
                    title={"Don't know what to do with your data?"}
                    content={
                      "Data analysis is defined as a process of cleaning, transforming, and modeling data to discover useful information for business decision-making. I can help you with that."
                    }
                  />
                </Flex>
                <Flex width="35%" mt={[2]} justifyContent="center">
                  <Card width={[80, 100, 120, 150, 175, 210, 225]} mx="auto">
                    <Image src={data} />
                  </Card>
                </Flex>
              </Flex>
            </Card>
          </Flex>
          <Flex
            sx={{
              mt: [4],
              ml: [1, 1, 1, 1, 1, 3, 3],
              mr: [1, 1, 1, 1, 1, 3, 3],
            }}
          >
            <Card width="100%">
              <Flex flexWrap="wrap">
                <Flex width="35%" mt={[3]} justifyContent="center">
                  <Card width={[80, 100, 120, 150, 175, 210, 225]} mx="auto">
                    <Image src={feedback} />
                  </Card>
                </Flex>
                <Flex width="65%" justifyContent="center" flexWrap="wrap">
                  <Content
                    title={"I am here to help others progress in their career"}
                    content={
                      "Wherever you are on your IT career path, it pays to find an experienced advisor who can guide you through pitfalls and shortcuts, both within your company and in the broader industry."
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
