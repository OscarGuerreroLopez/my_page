import React from "react";
import { Flex, Text, Card, Image } from "rebass";
import { v4 as uuidv4 } from "uuid";

import { CustomCard } from "../../components/customCard";
import WorkExperience from "./workExperience.json";
import { WorkExperience as WorkExperienceComp } from "./workExperience";

import resume from "./images/undraw_updated_resume_u4fy.svg";

interface IProps {}

interface IWorkExperience {
  title: string;
  company: string;
  description: string;
}

export const First: React.FC<IProps> = (): JSX.Element => {
  return (
    <>
      <Flex
        flexWrap="wrap"
        width={["100%", "100%", "100%", "100%", "100%", "80%", "80%", "80%"]}
        justifyContent="center"
      >
        <CustomCard width={["100%"]}>
          <Flex width={["100%"]} mt={["4"]}>
            <Card width={[256, 256, 300, 320, 350, 420, 550]} mx="auto">
              <Image src={resume} alt="Oscar Guerrero" />
            </Card>
          </Flex>
          <Flex flexWrap="wrap" justifyContent="center" width={["100%"]} mt="4">
            <Flex
              justifyContent="center"
              width={[
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "30%",
                "30%",
                "30%",
              ]}
            >
              <Text fontWeight="bold" fontSize={[3, 3, 4, 4, 5, 5, 6, 6]}>
                Experience
              </Text>
            </Flex>
            <Flex
              width={[
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "70%",
                "70%",
                "70%",
              ]}
              flexWrap="wrap"
            >
              {WorkExperience.data.map((result: IWorkExperience) => {
                return (
                  <WorkExperienceComp
                    title={result.title}
                    company={result.company}
                    description={result.description}
                    key={uuidv4()}
                  />
                );
              })}
            </Flex>
          </Flex>
          <Flex
            flexWrap="wrap"
            justifyContent="center"
            width={["100%"]}
            mt="4"
            mb={["5"]}
          >
            <Flex
              justifyContent="center"
              width={[
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "30%",
                "30%",
                "30%",
              ]}
            >
              <Text fontWeight="bold" fontSize={[3, 3, 4, 4, 5, 5, 6, 6]}>
                Education
              </Text>
            </Flex>
            <Flex
              width={[
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "70%",
                "70%",
                "70%",
              ]}
              flexWrap="wrap"
            >
              <WorkExperienceComp
                title={"Associate's degree "}
                company={"Kalamazoo Valley Community College"}
                description={
                  "Completed my Computer and Information Systems Technologies degree there in 2001"
                }
                key={uuidv4()}
              />
            </Flex>
          </Flex>
        </CustomCard>
      </Flex>
    </>
  );
};
