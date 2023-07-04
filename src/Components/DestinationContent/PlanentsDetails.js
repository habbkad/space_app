import React from "react";
import { Text, Box, Flex, Heading } from "@chakra-ui/react";
const PlanentsDetails = (props) => {
  // console.log(props.details);
  let details = props.details;
  return (
    <div>
      <Box w={["95%", 450]}>
        <Heading
          fontSize={["130px", "150px"]}
          textAlign={["center", "normal"]}
          style={{ fontFamily: "Bellefair" }}
        >
          {props.planet}
        </Heading>
        <Text align={"center"}>{details.description}</Text>
        <Box
          w={["95%", 400]}
          backgroundColor={"rgba(251, 245, 245, 0.421)"}
          h={0.2}
          mt={20}
        />
      </Box>
      <Flex mt={10} align={["center", "normal"]} direction={["column", "row"]}>
        <Box marginRight={[0, 20]}>
          <Text fontSize={"14px"} align={["center", "normal"]} color={"bluey"}>
            AVG. DISTANCE
          </Text>
          <Heading fontSize={"28px"} fontWeight={"thin"}>
            {details.distance}
          </Heading>
        </Box>
        <Box mt={[10, 0]}>
          <Text fontSize={"14px"} align={["center", "normal"]} color={"bluey"}>
            EST. TRAVEL TIME{" "}
          </Text>
          <Heading fontSize={"28px "} fontWeight={"thin"} textAlign={"center"}>
            {details.travel}
          </Heading>
        </Box>
      </Flex>
    </div>
  );
};

export default PlanentsDetails;
