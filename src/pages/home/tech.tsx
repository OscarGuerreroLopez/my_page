import React from "react";
import { Flex, Text, Card, Image } from "rebass";

import { CustomCard } from "../../components/customCard";
// import angular from "./images/angularjs-original.svg";
// import node from "./images/nodejs-original.svg";
// import react from "./images/react-original.svg";
// import cplus from "./images/cplusplus-original.svg";
// import amazon from "./images/amazonwebservices-original.svg";
// import java from "./images/java-original.svg";
// import ts from "./images/typescript-original.svg";
// import redis from "./images/redis-original.svg";
// import python from "./images/python-original.svg";
// import mongodb from "./images/mongodb-original-wordmark.svg";
// import mysql from "./images/mysql-original-wordmark.svg";
// import gitlab from "./images/gitlab-original-wordmark.svg";

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
        <Image src={name} alt={title} />
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
            <StackImages
              name={
                "https://ik.imagekit.io/zhu0vsy9dn/oscar_page/angularjs-original_bsnVa0MXST84.svg"
              }
              title={"Angular"}
            />
            <StackImages
              name={
                "https://ik.imagekit.io/zhu0vsy9dn/oscar_page/nodejs-original_ZuwP0cidqA4H.svg"
              }
              title={"Node"}
            />
            <StackImages
              name={
                "https://ik.imagekit.io/zhu0vsy9dn/oscar_page/react-original_HKhI-nUSV3dj.svg"
              }
              title={"React"}
            />
          </Flex>
          <Flex flexWrap="wrap" justifyContent="center">
            <StackImages
              name={
                "https://ik.imagekit.io/zhu0vsy9dn/oscar_page/cplusplus-original_BI0n6Hx6MbtI.svg"
              }
              title={"C++"}
            />

            <StackImages
              name={
                "https://ik.imagekit.io/zhu0vsy9dn/oscar_page/amazonwebservices-original_St0pGpr-dY7.svg"
              }
              title={"Amazon"}
            />
            <StackImages
              name={
                "https://ik.imagekit.io/zhu0vsy9dn/oscar_page/java-original_os2rMlW1zeYl.svg"
              }
              title={"Java"}
            />
          </Flex>
          <Flex flexWrap="wrap" justifyContent="center">
            <StackImages
              name={
                "https://ik.imagekit.io/zhu0vsy9dn/oscar_page/typescript-original_YBEoiX5R9kUg.svg"
              }
              title={"TypeScript"}
            />
            <StackImages
              name={
                "https://ik.imagekit.io/zhu0vsy9dn/oscar_page/redis-original_kOtGPcXthXPS.svg"
              }
              title={"Redis"}
            />
            <StackImages
              name={
                "https://ik.imagekit.io/zhu0vsy9dn/oscar_page/python-original_0HWt8G5Kr0uc.svg"
              }
              title={"Python"}
            />
          </Flex>
          <Flex flexWrap="wrap" justifyContent="center">
            <StackImages
              name={
                "https://ik.imagekit.io/zhu0vsy9dn/oscar_page/mongodb-original-wordmark_lgRomWvL_NdH.svg"
              }
              title={"MongoDB"}
            />
            <StackImages
              name={
                "https://ik.imagekit.io/zhu0vsy9dn/oscar_page/mysql-original-wordmark_Pd6HFNgu36g5.svg"
              }
              title={"MySql"}
            />
            <StackImages
              name={
                "https://ik.imagekit.io/zhu0vsy9dn/oscar_page/gitlab-original-wordmark_9mqXpf1pS6mE.svg"
              }
              title={"GitLab"}
            />
          </Flex>
        </CustomCard>
      </Flex>
    </Flex>
  );
};
