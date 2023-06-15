import React from "react";
import { Image, Text } from "@chakra-ui/react";
const PlanetPctures = (props) => {
  //console.log(props.details);
  return (
    <div>
      <Text>PICK YOUR DESTINATION</Text>

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
