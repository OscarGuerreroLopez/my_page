import React from "react";
import { Flex, Text, Card, Image } from "rebass";

import { CustomCard } from "../../components/customCard";
import angular from "./images/angularjs-original.svg";
import node from "./images/nodejs-original.svg";
import react from "./images/react-original.svg";
import cplus from "./images/cplusplus-original.svg";
import amazon from "./images/amazonwebservices-original.svg";
import java from "./images/java-original.svg";
import ts from "./images/typescript-original.svg";
import redis from "./images/redis-original.svg";
import python from "./images/python-original.svg";
import mongodb from "./images/mongodb-original-wordmark.svg";
import mysql from "./images/mysql-original-wordmark.svg";
import gitlab from "./images/gitlab-original-wordmark.svg";

interface IProps {}

interface IStackImage {
  name: string;
  title: string;
}

const StackImages: React.FC<IStackImage> = ({ name, title }): JSX.Element => {
  return (
    <Flex
      sx={{
        witdth: ["33.3%"],
        ml: [2, 3, 3, 3, 2, 3, "38px"],
        mr: [2, 3, 3, 3, 2, 3, "38px"],
        mt: [2, 3, 3, 3, 2, 3, "38px"],
      }}
    >
      <Card width={[40, 60, 80, 100, 120, 140, 200]} mx="auto">
        <Image src={name} alt={name} />
        <Text textAlign="center">{title}</Text>
      </Card>
    </Flex>
  );
};

export const Tech: React.FC<IProps> = (): JSX.Element => {
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      <Flex
        sx={{
          mb: [2, 2, 2, 3, 4, 4, 4],
          width: ["100%", "100%", "100%", "100%", "60%"],
          bg: "yellow",
        }}
      >
        <CustomCard width="100%">
          <Text
            fontSize={[2, 2, 3, 3, 3, 5, 5]}
            fontWeight="bold"
            textAlign="center"
          >
            My Stack
          </Text>
          <Flex flexWrap="wrap" justifyContent="center">
            <StackImages name={angular} title={"Angular"} />
            <StackImages name={node} title={"Node"} />
            <StackImages name={react} title={"React"} />
          </Flex>
          <Flex flexWrap="wrap" justifyContent="center">
            <StackImages name={cplus} title={"C++"} />

            <StackImages name={amazon} title={"Amazon"} />
            <StackImages name={java} title={"Java"} />
          </Flex>
          <Flex flexWrap="wrap" justifyContent="center">
            <StackImages name={ts} title={"TypeScript"} />
            <StackImages name={redis} title={"Redis"} />
            <StackImages name={python} title={"Python"} />
          </Flex>
          <Flex flexWrap="wrap" justifyContent="center">
            <StackImages name={mongodb} title={"MongoDB"} />
            <StackImages name={mysql} title={"MySql"} />
            <StackImages name={gitlab} title={"GitLab"} />
          </Flex>
        </CustomCard>
      </Flex>
    </Flex>
  );
};
