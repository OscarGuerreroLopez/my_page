import React from "react";
import { Flex, Card, Image } from "rebass";

import { CustomCard } from "../../components/customCard";
import { CardText } from "../../components/cardContent";
import design from "./images/undraw_experience_design_eq3j.svg";
import completed from "./images/undraw_project_completed_w0oq.svg";
import chat from "./images/undraw_Group_chat_unwm.svg";
import done from "./images/undraw_done_a34v.svg";

interface IProps {}

export const Second: React.FC<IProps> = (): JSX.Element => {
  return (
    <>
      <Flex
        flexWrap="wrap"
        width={["100%", "100%", "100%", "100%", "100%", "80%", "80%", "80%"]}
        justifyContent="center"
      >
        <Flex
          width={["100%", "100%", "100%", "100%", "100%", "50%", "50%", "50%"]}
          justifyContent="center"
          mt="4"
        >
          <CustomCard
            width={[
              "100%",
              "100%",
              "100%",
              "100%",
              "100%",
              "95%",
              "95%",
              "95%",
            ]}
          >
            <Flex>
              <Card width={[256, 256, 300, 320, 370, 420, 550]} mx="auto">
                <Image src={completed} />
              </Card>
            </Flex>
            <Flex flexWrap="wrap" justifyContent="center">
              <CardText
                title={"Work Experience"}
                content={
                  "Experience using modern full-cycle web application development to deploy on one or more Digital Service or agile software projects or platforms including all aspects of development, testing, and production launch"
                }
              />
              <CardText
                content={
                  "Experience developing and consuming web-based RESTful and GraphQL APIs."
                }
              />
              <CardText
                content={
                  "Not too experienced in Graphic design, but I get the job done. I concentrate more on the data part of the FE projects and to make web apps run in an efficient manner"
                }
              />
            </Flex>
          </CustomCard>
        </Flex>

        <Flex
          width={["100%", "100%", "100%", "100%", "100%", "50%", "50%", "50%"]}
          justifyContent="center"
          mt="4"
        >
          <CustomCard
            width={[
              "100%",
              "100%",
              "100%",
              "100%",
              "100%",
              "95%",
              "95%",
              "95%",
            ]}
          >
            <Flex flexWrap="wrap">
              <Flex width="100%" justifyContent="left">
                <CardText title={"SoftSkills....."} />
              </Flex>
              {/* ******************************************** */}
              <Flex width="40%">
                <Card width={[256, 256, 300, 320, 350, 420, 550]} mx="auto">
                  <Image src={chat} />
                </Card>
              </Flex>
              <Flex width="60%" flexWrap="wrap">
                <CardText
                  title={"Communication"}
                  content={
                    "The ability to communicate involves knowing how you should speak to others in different situations or settings."
                  }
                />
              </Flex>

              {/* ******************************************** */}

              <Flex width="60%" flexWrap="wrap">
                <CardText
                  title={"Problem-solving"}
                  content={
                    "Resolve issues quickly and effectively. That may involve calling on industry knowledge to fix an issue immediately as it occurs, or taking time to research and consult with colleagues to find a scalable, long-term solution."
                  }
                />
              </Flex>
              <Flex width="40%">
                <Card width={[256, 256, 300, 320, 350, 420, 550]} mx="auto">
                  <Image src={design} />
                </Card>
              </Flex>

              {/* ******************************************** */}
              <Flex width="40%">
                <Card width={[256, 256, 300, 320, 350, 420, 550]} mx="auto">
                  <Image src={done} />
                </Card>
              </Flex>
              <Flex width="60%" flexWrap="wrap">
                <CardText
                  title={"Creative"}
                  content={
                    "Find new ways to perform tasks, improve processes or even develop new and exciting avenues for the business to explore. "
                  }
                />
              </Flex>
              {/* ******************************************** */}
            </Flex>
          </CustomCard>
        </Flex>
      </Flex>
    </>
  );
};
