import React from "react";
import { Flex, Text, Link } from "rebass";

import { CustomCard } from "../../components/customCard";

interface IProps {}

export const ContactCard: React.FC<IProps> = (): JSX.Element => {
  return (
    <>
      <Flex
        sx={{
          mt: [4, 5, 5, 5, 5, 6],
          //   mb: [2, 2, 2, 3, 4, 4, 4],
          width: ["100%", "100%", "100%", "100%", "100%"],
          justifyContent: "center",
        }}
      >
        <CustomCard width={["80%", "80%", "80%", "60%", "60%"]}>
          <Text
            fontSize={[3, 3, 4, 4, 4, 5, 5]}
            fontWeight="bold"
            textAlign="center"
            mt={[2, 3, 3, 3, 3, 3]}
          >
            Contact me
          </Text>
          <Text
            p={1}
            fontSize={[2, 2, 2, 2, 3, 3, 4]}
            textAlign="center"
            mt={[2, 2, 2, 3, 3, 3]}
          >
            You can reach me by email at:
          </Text>
          <Text p={1} fontSize={[2, 2, 2, 2, 3, 3, 4]} textAlign="center">
            <Link
              href="mailto:oscar.computer.guy@gmail.com?subject=Hello I am interested in your service&body=Hello Oscar, I am contacting you from your website"
              sx={{ textDecoration: "none", color: "blue" }}
            >
              <Text>oscar.computer.guy@gmail.com</Text>
            </Link>
          </Text>
          <Text
            p={1}
            fontSize={[2, 2, 2, 2, 3, 3, 4]}
            textAlign="center"
            mt={[2, 2, 2, 3, 3, 3]}
          >
            You can reach me by phone at:
          </Text>
          <Text p={1} fontSize={[2, 2, 2, 2, 3, 3, 4]} textAlign="center">
            <Link
              href="tel:+34-622-45-00-08"
              sx={{ textDecoration: "none", color: "blue" }}
            >
              <Text>+ 34 622 45 00 08</Text>
            </Link>
          </Text>
          <Text
            p={1}
            fontSize={[2, 2, 2, 2, 3, 3, 4]}
            textAlign="center"
            mt={[2, 2, 2, 3, 3, 3]}
          >
            Linkedin:
          </Text>
          <Text p={1} fontSize={[1, 1, 1, 1, 3, 3, 4]} textAlign="center">
            <Link
              href="https://www.linkedin.com/in/oscar-g-a59289153/"
              target="_blank"
              sx={{ textDecoration: "none", color: "blue" }}
            >
              <Text>https://www.linkedin.com/in/oscar</Text>
            </Link>
          </Text>
        </CustomCard>
      </Flex>
    </>
  );
};
