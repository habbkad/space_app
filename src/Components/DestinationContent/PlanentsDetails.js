import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
const PlanentsDetails = (props) => {
  // console.log(props.details);
  let details = props.details;
  return (
    <div>
      <Box w={400}>
        <Text fontSize={"8xl"} align={["center", "normal"]}>
          {props.planet}
        </Text>
        <Text>{details.description}</Text>
        <Box
          w={["100%", 400]}
          backgroundColor={"rgba(251, 245, 245, 0.421)"}
          h={0.2}
          mt={20}
        />
      </Box>
      <Flex mt={10} align={["center", "normal"]} direction={["column", "row"]}>
        <Box marginRight={[0, 20]}>
          <Text fontSize={"2xs"} align={["center", "normal"]}>
            AVG. DISTANCE
          </Text>
          <Text fontSize={"2xl"}>{details.distance}</Text>
        </Box>
        <Box mt={[10, 0]}>
          <Text fontSize={"2xs"} align={["center", "normal"]}>
            AVG. DISTANCE
          </Text>
          <Text fontSize={"2xl"}>{details.travel}</Text>
        </Box>
      </Flex>
    </div>
  );
};

export default PlanentsDetails;
