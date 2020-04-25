import React from "react";
import { Flex, Text, Box, Card, Image } from "rebass";

import { CustomCard } from "../../components/customCard";
import visionary from "./images/programming.svg";

interface IProps {
  onClick: () => void;
}

export const AboutUs: React.FC<IProps> = ({ onClick }): JSX.Element => {
  return (
    <Flex flexWrap="wrap">
      <Flex
        sx={{
          width: ["100%", "100%", "100%", "100%", "50%"],
          mt: [2, 2, 2, 3, 3, 3, 4],
          justifyContent: "center",
        }}
      >
        <Flex>
          <Card width={[256, 256, 300, 320, 350, 420, 550]} mx="auto">
            <Text fontSize={["3", "3", "3", "3", "4", "4", "5"]}>
              Hello I am Oscar Guerrero
            </Text>
            <Image src={visionary} />
          </Card>
        </Flex>
      </Flex>
      <Flex
        sx={{
          mt: [2, 2, 2, 3, 3, 3, 6],
          width: ["100%", "100%", "100%", "100%", "50%"],
        }}
      >
        <CustomCard
          mr={["0", "0", "0", "0", "5", "6", "6"]}
          mb={["0", "0", "0", "0", "5", "6", "6"]}
        >
          <Text
            fontSize={[2, 2, 3, 3, 3, 4, 4]}
            fontWeight="bold"
            textAlign="center"
          >
            About me
          </Text>
          <Text p={1} fontSize={[2, 2, 2, 2, 3, 3, 4]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </CustomCard>
      </Flex>
    </Flex>
  );
};
