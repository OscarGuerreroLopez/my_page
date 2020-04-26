import React from "react";
import { Flex, Text, Box, Card, Image } from "rebass";

import { CustomCard } from "../../components/customCard";
import visionary from "./images/programming.svg";

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

export const Tech: React.FC<IProps> = ({ onClick }): JSX.Element => {
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
          <Text
            fontSize={[2, 2, 3, 3, 3, 5, 5]}
            fontWeight="bold"
            textAlign="center"
          >
            My Stack
          </Text>
          <Flex flexWrap="wrap" justifyContent="center">
            <StackImages
              name={"https://icongr.am/devicon/angularjs-original.svg?size=600"}
              title={"Angular"}
            />
            <StackImages
              name={"https://icongr.am/devicon/nodejs-original.svg?size=600"}
              title={"Node"}
            />
            <StackImages
              name={"https://icongr.am/devicon/react-original.svg?size=600"}
              title={"React"}
            />
          </Flex>
          <Flex flexWrap="wrap" justifyContent="center">
            <StackImages
              name={"https://icongr.am/devicon/cplusplus-original.svg?size=600"}
              title={"C++"}
            />

            <StackImages
              name={
                "https://icongr.am/devicon/amazonwebservices-original.svg?size=600"
              }
              title={"Amazon"}
            />
            <StackImages
              name={"https://icongr.am/devicon/java-original.svg?size=600"}
              title={"Java"}
            />
          </Flex>
          <Flex flexWrap="wrap" justifyContent="center">
            <StackImages
              name={
                "https://icongr.am/devicon/typescript-original.svg?size=600"
              }
              title={"TypeScript"}
            />
            <StackImages
              name={"https://icongr.am/devicon/redis-original.svg?size=600"}
              title={"Redis"}
            />
            <StackImages
              name={"https://icongr.am/devicon/python-original.svg?size=600"}
              title={"Python"}
            />
          </Flex>
          <Flex flexWrap="wrap" justifyContent="center">
            <StackImages
              name={
                "https://icongr.am/devicon/mongodb-original-wordmark.svg?size=600"
              }
              title={"MongoDB"}
            />
            <StackImages
              name={
                "https://icongr.am/devicon/mysql-original-wordmark.svg?size=600"
              }
              title={"MySql"}
            />
            <StackImages
              name={
                "https://icongr.am/devicon/gitlab-original-wordmark.svg?size=600"
              }
              title={"GitLab"}
            />
          </Flex>
        </CustomCard>
      </Flex>
    </Flex>
  );
};
