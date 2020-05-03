import React from "react";
import { Flex, Text, Card, Image } from "rebass";

import { CustomCard } from "../../components/customCard";
import { CardText } from "../../components/cardContent";
// import visionary from "./images/programming.svg";

interface IProps {}

export const AboutUs: React.FC<IProps> = (): JSX.Element => {
  return (
    <Flex flexWrap="wrap">
      <Flex
        sx={{
          width: ["100%", "100%", "100%", "100%", "50%"],
          mt: [2, 2, 2, 3, 3, 3, 4],
          justifyContent: "center",
        }}
      >
        <Card width={[256, 256, 300, 320, 350, 420, 550]} mx="auto">
          <Text fontSize={["3", "3", "3", "3", "4", "4", "5"]}>
            Hello I am Oscar Guerrero
          </Text>
          <Image
            src="https://ik.imagekit.io/zhu0vsy9dn/oscar_page/programming_MrDc9H5Xhqy.svg"
            alt="Oscar Guerrero"
          />
        </Card>
      </Flex>
      <Flex
        sx={{
          mt: [2, 2, 2, 3, 3, 3, 5],
          width: ["100%", "100%", "100%", "100%", "50%"],
        }}
      >
        <CustomCard
          mr={["0", "0", "0", "0", "5", "6", "6"]}
          mb={["0", "0", "0", "0", "5", "6", "6"]}
        >
          <CardText title={"About me"} />
          <CardText
            content={
              " Experienced Programmer and Operations Engineer with a demonstrated\
            history of working in the information technology and services\
            industry. Team player, communicative, problem-solving and eager to\
            learn everyday are just part of my soft skills."
            }
          />
          <CardText
            content={
              "Right now working with React, Node js and typescript. MongoDB and\
            MySql databases with mongoose and TypeOrm."
            }
          />
        </CustomCard>
      </Flex>
    </Flex>
  );
};
