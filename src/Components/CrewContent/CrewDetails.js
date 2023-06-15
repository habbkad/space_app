import React from "react";
import { Text, Box, Center } from "@chakra-ui/react";

const CrewDetails = (props) => {
  const { details } = props;
  return (
    <div>
      <Box w={["100%", "90%"]} mt={[10, 20]} p={[4, 0]}>
        <Text fontSize="2xl" textAlign={["center", "start"]}>
          {details.role}
        </Text>
        <Text fontSize="6xl" mb={15} textAlign={["center", "start"]}>
          {details.name}
        </Text>
        <Text mt={5} h={150} textAlign={["center", "start"]}>
          {details.bio}
        </Text>
      </Box>
    </div>
  );
};

export default CrewDetails;
