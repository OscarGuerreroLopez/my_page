import React from "react";
import { Flex, Text, Box } from "rebass";

import { CustomCard } from "../../components/customCard";

interface IProps {
  onClick: () => void;
}

export const AboutUs: React.FC<IProps> = ({ onClick }): JSX.Element => {
  return (
    <CustomCard>
      <Text
        fontSize={[3, 3, 4, 4, 4, 5, 5]}
        fontWeight="bold"
        textAlign="center"
      >
        About
      </Text>
      <Text p={1} fontSize={[2, 2, 2, 2, 3, 3, 4]}>
        About page
      </Text>
    </CustomCard>
  );
};
