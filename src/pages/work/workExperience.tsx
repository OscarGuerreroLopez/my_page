import React from "react";
import { Flex, Text } from "rebass";

interface IProps {
  title: string;
  company: string;
  description: string;
  key: string;
}

export const WorkExperience: React.FC<IProps> = ({
  title,
  company,
  description,
}): JSX.Element => {
  return (
    <Flex justifyContent="left" flexWrap="wrap" mt="3">
      <Text
        fontWeight="bold"
        fontSize={[2, 2, 3, 3, 4, 4, 5, 5]}
        ml={[5]}
        mr={[4]}
        width="100%"
      >
        {title}
      </Text>
      <Text
        fontSize={[2, 2, 3, 3, 3, 3, 4, 4]}
        color="red"
        ml={[5]}
        width="100%"
      >
        {company}
      </Text>
      <Text fontSize={[1, 1, 2, 2, 2, 2, 3, 3]} ml={[5]} width="100%">
        {description}
      </Text>
    </Flex>
  );
};
