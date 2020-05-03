import React, { ReactNode } from "react";
import { Flex, Text, Card, Image } from "rebass";

import { CustomCard } from "../../components/customCard";
// import analysis from "./images/Analysis.svg";
// import computer from "./images/computer.svg";

interface IProps {}
interface ICards {
  children: ReactNode;
}

export const Goodies: React.FC<IProps> = (): JSX.Element => {
  return (
    <Flex flexWrap="wrap">
      <Flex
        sx={{
          mt: [2, 2, 2, 3, 3, 3, 5],
          width: ["100%", "100%", "100%", "100%", "50%"],
        }}
      >
        {/* ************************************************************************** */}

        <CustomCard
          mr={["0", "0", "0", "0", "3", "3", "3"]}
          ml={["0", "0", "0", "0", "5", "6", "6"]}
          mb={["0", "0", "0", "0", "5", "6", "6"]}
        >
          <Flex>
            <Card width={[256, 256, 300, 320, 350, 420, 550]} mx="auto">
              <Image
                src="https://ik.imagekit.io/zhu0vsy9dn/oscar_page/Analysis_a6rFS4Tik0g8.svg"
                alt="Oscar Guerrero"
              />
            </Card>
          </Flex>
          <Text
            fontSize={[2, 2, 3, 3, 3, 4, 4]}
            fontWeight="bold"
            textAlign="center"
          >
            Experienced in software engineering for small and big companies
          </Text>
          <Text p={1} fontSize={[2, 2, 2, 2, 3, 3, 4]}>
            I have worked for startups and also big multinational companies.
            Developing from the initial user story all the way to the deployment
            in production.
          </Text>
          <Text p={1} fontSize={[2, 2, 2, 2, 3, 3, 4]}>
            Proficient using project management tools such as Jira, Confluence
            and GitHub or Gitlab
          </Text>
        </CustomCard>
        {/* ************************************************************************** */}
      </Flex>
      <Flex
        sx={{
          mt: [2, 2, 2, 3, 3, 3, 5],
          width: ["100%", "100%", "100%", "100%", "50%"],
        }}
      >
        {/* ************************************************************************** */}

        <CustomCard
          mr={["0", "0", "0", "0", "5", "6", "6"]}
          ml={["0", "0", "0", "0", "3", "3", "3"]}
          mb={["0", "0", "0", "0", "5", "6", "6"]}
        >
          <Flex>
            <Card width={[256, 256, 300, 320, 350, 420, 550]} mx="auto">
              <Image
                src="https://ik.imagekit.io/zhu0vsy9dn/oscar_page/computer_X_GvnxC7Oso.svg"
                alt="Oscar Guerrero"
              />
            </Card>
          </Flex>
          <Text
            fontSize={[2, 2, 3, 3, 3, 4, 4]}
            fontWeight="bold"
            textAlign="center"
          >
            What moves me
          </Text>
          <Text fontSize={[2, 2, 2, 2, 3, 3, 4]}>
            Help achieve your goals and make a robust stable product for your
            needs are the most important factors that really move me. Also, I am
            always looking forward to get my hands on the new emerging
            technologies to improve my knowledge and keep on the loop.
          </Text>
          <Text fontSize={[2, 2, 2, 2, 3, 3, 4]}>
            Love helping and mentoring others and also learn from others as
            well. I believe that everyday you can learn something new or make
            something that will help others
          </Text>
        </CustomCard>

        {/* ************************************************************************** */}
      </Flex>
    </Flex>
  );
};
