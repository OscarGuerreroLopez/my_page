import React from "react";
import { Flex, Text, Card, Image } from "rebass";

import { CustomCard } from "../../components/customCard";
import { CardText } from "../../components/cardContent";
// import office from "./images/office.svg";
// import worktogether from "./images/worktogether.svg";
// import data from "./images/data.svg";
// import feedback from "./images/feedback.svg";

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
        <CustomCard width="100%">
          <Card width={[256, 256, 300, 320, 350, 420, 550]} mx="auto">
            <Image
              src="https://ik.imagekit.io/zhu0vsy9dn/oscar_page/office_IEirNhAbBhg4.svg"
              alt="Oscar Guerrero"
            />
          </Card>

          <Text
            fontSize={[2, 2, 3, 3, 3, 5, 5]}
            fontWeight="bold"
            textAlign="center"
          >
            How can I help you?
          </Text>
          {/* ************************************************************************** */}

          <Card
            sx={{
              mt: [4],
              ml: [1, 1, 1, 1, 1, 3, 3],
              mr: [1, 1, 1, 1, 1, 3, 3],
            }}
          >
            <Flex flexWrap="wrap">
              <Flex width="35%" justifyContent="center" mt={[2]}>
                <Card width={[80, 150, 120, 150, 175, 210, 225]} mx="auto">
                  <Image
                    src="https://ik.imagekit.io/zhu0vsy9dn/oscar_page/worktogether_ri5W0b1RE4HH.svg"
                    alt="Oscar Guerrero"
                  />
                </Card>
              </Flex>
              <Flex width="65%" justifyContent="center" flexWrap="wrap">
                <CardText
                  title={"Need help or advice on a project?"}
                  content={
                    "I offer consultancy services for any type of companies looking to implement or improve their technology stack. Contact me if you need help."
                  }
                />
              </Flex>
            </Flex>
          </Card>

          {/* ************************************************************************** */}
          <Card
            sx={{
              mt: [4],
              ml: [1, 1, 1, 1, 1, 3, 3],
              mr: [1, 1, 1, 1, 1, 3, 3],
            }}
          >
            <Flex flexWrap="wrap">
              <Flex width="65%" justifyContent="center" flexWrap="wrap">
                <CardText
                  title={"Don't know what to do with your data?"}
                  content={
                    "Data analysis is defined as a process of cleaning, transforming, and modeling data to discover useful information for business decision-making. I can help you with that."
                  }
                />
              </Flex>
              <Flex width="35%" mt={[2]} justifyContent="center">
                <Card width={[80, 100, 120, 150, 175, 210, 225]} mx="auto">
                  <Image
                    src="https://ik.imagekit.io/zhu0vsy9dn/oscar_page/data_qfeeULNksITg.svg"
                    alt="Oscar Guerrero"
                  />
                </Card>
              </Flex>
            </Flex>
          </Card>
          {/* ************************************************************************** */}
          <Card
            sx={{
              mt: [4],
              ml: [1, 1, 1, 1, 1, 3, 3],
              mr: [1, 1, 1, 1, 1, 3, 3],
            }}
          >
            <Flex flexWrap="wrap">
              <Flex width="35%" mt={[3]} justifyContent="center">
                <Card width={[80, 100, 120, 150, 175, 210, 225]} mx="auto">
                  <Image
                    src="https://ik.imagekit.io/zhu0vsy9dn/oscar_page/feedback_TVS3ga86Ohxd.svg"
                    alt="Oscar Guerrero"
                  />
                </Card>
              </Flex>
              <Flex width="65%" justifyContent="center" flexWrap="wrap">
                <CardText
                  title={"I am here to help others progress in their career"}
                  content={
                    "Wherever you are on your IT career path, it pays to find an experienced advisor who can guide you through pitfalls and shortcuts, both within your company and in the broader industry."
                  }
                />
              </Flex>
            </Flex>
          </Card>
          {/* ************************************************************************** */}
        </CustomCard>
      </Flex>
    </Flex>
  );
};
