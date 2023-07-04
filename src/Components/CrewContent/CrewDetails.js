import React from "react";
import { Text, Box, Center, Heading } from "@chakra-ui/react";

const CrewDetails = (props) => {
  const { details } = props;
  return (
    <div>
      <Box w={["100%", "90%"]} mt={[5, 20]} p={[4, 0]} mb={[2, 0]}>
        <Heading
          fontSize={["20px", "32px"]}
          textAlign={["center", "start"]}
          opacity={0.6}
        >
          {details.role}
        </Heading>
        <Heading
          fontFamily={"heading"}
          fontSize={["32px", "45px"]}
          mb={15}
          textAlign={["center", "start"]}
        >
          {details.name}
        </Heading>
        <Text mt={5} h={150} textAlign={["center", "start"]}>
          {details.bio}
        </Text>
      </Box>
    </div>
  );
};

export default CrewDetails;
