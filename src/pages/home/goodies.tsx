import React from "react";
import { Flex, Text, Box, Card, Image } from "rebass";

import { CustomCard } from "../../components/customCard";
import visionary from "./images/programming.svg";
import analysis from "./images/Analysis.svg";
import computer from "./images/computer.svg";

interface IProps {
  onClick: () => void;
}

export const Goodies: React.FC<IProps> = ({ onClick }): JSX.Element => {
  return (
    <Flex flexWrap="wrap">
      <Flex
        sx={{
          mt: [2, 2, 2, 3, 3, 3, 5],
          width: ["100%", "100%", "100%", "100%", "50%"],
        }}
      >
        <CustomCard
          mr={["0", "0", "0", "0", "3", "3", "3"]}
          ml={["0", "0", "0", "0", "5", "6", "6"]}
          mb={["0", "0", "0", "0", "5", "6", "6"]}
        >
          <Flex>
            <Card width={[256, 256, 300, 320, 350, 420, 550]} mx="auto">
              <Image src={analysis} />
            </Card>
          </Flex>
          <Text
            fontSize={[2, 2, 3, 3, 3, 4, 4]}
            fontWeight="bold"
            textAlign="center"
          >
            Experienced in data analytics for small and big companies
          </Text>
          <Text p={1} fontSize={[2, 2, 2, 2, 3, 3, 4]}>
            I have worked for startups and also big multinational companies.
            Developing from the initial user story all the way to the deployment
            in production.
          </Text>
          <Text p={1} fontSize={[2, 2, 2, 2, 3, 3, 4]}>
            Right now working with React, Node js and typescript. Based in the
            EU and hodling a EU passport
          </Text>
        </CustomCard>
      </Flex>
      <Flex
        sx={{
          mt: [2, 2, 2, 3, 3, 3, 5],
          width: ["100%", "100%", "100%", "100%", "50%"],
        }}
      >
        <CustomCard
          mr={["0", "0", "0", "0", "5", "6", "6"]}
          ml={["0", "0", "0", "0", "3", "3", "3"]}
          mb={["0", "0", "0", "0", "5", "6", "6"]}
        >
          <Flex>
            <Card width={[256, 256, 300, 320, 350, 420, 550]} mx="auto">
              <Image src={computer} />
            </Card>
          </Flex>
          <Text
            fontSize={[2, 2, 3, 3, 3, 4, 4]}
            fontWeight="bold"
            textAlign="center"
          >
            What moves me
          </Text>
          <Text p={1} fontSize={[2, 2, 2, 2, 3, 3, 4]}>
            Experienced Programmer and Operations Engineer with a demonstrated
            history of working in the information technology and services
            industry. Team player, communicative, problem-solving and eager to
            learn everyday are just part of my soft skills.
          </Text>
          <Text p={1} fontSize={[2, 2, 2, 2, 3, 3, 4]}>
            Right now working with React, Node js and typescript. Based in the
            EU and hodling a EU passport
          </Text>
        </CustomCard>
      </Flex>
    </Flex>
  );
};
