import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Flex, Text } from "rebass";

import { MetaTags } from "../../utils/MetaTags";
import { CustomCard } from "../../components/customCard";
import { CardText } from "../../components/cardContent";
interface IProps extends RouteComponentProps {}

const Notfound = withRouter(({ history }: IProps) => {
  return (
    <>
      <MetaTags />
      <Flex
        sx={{
          mt: 3,
          width: ["100%"],
        }}
        justifyContent="center"
      >
        <CustomCard width="80%">
          <CardText
            title={"Page not found"}
            content={
              "This page does not exists or it is under construction. Sorry for the inconvenience"
            }
          />

          <Text fontSize={[1, 1, 2, 3, 4]} fontWeight="bold">
            By the way, soon I will publish the code in github
          </Text>

          <Text
            fontSize={[2, 2, 3, 4, 5]}
            fontWeight="bold"
            style={{ cursor: "pointer", color: "#3383FF" }}
            onClick={() => history.push("/")}
          >
            Go back to the main page.....
          </Text>
        </CustomCard>
      </Flex>
    </>
  );
});

export default Notfound;
