import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
const PlanetPctures = (props) => {
  //console.log(props.details);
  return (
    <div>
      <Flex>
        <Text
          color={"white"}
          letterSpacing={"3px"}
          mt={15}
          fontSize={["16px", "28px"]}
          opacity={0.6}
          mr={2}
        >
          01
        </Text>
        <Text
          color={"milky"}
          mt={15}
          fontSize={["16px", "28px"]}
          letterSpacing={"3px"}
        >
          PICK YOUR DESTINATION
        </Text>
      </Flex>

      <Image
        mt={[10, 20]}
        mb={[10, 0]}
        boxSize="370px"
        src={props.picture}
        alt="Dan Abramov"
        borderRadius={"full"}
      />
    </div>
  );
};

export default PlanetPctures;
