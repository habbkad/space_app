import React from "react";
import { Flex, Image, Box, Text } from "@chakra-ui/react";
import pic from "./assets/technology/image-launch-vehicle-portrait.jpg";
import pic2 from "./assets/technology/image-spaceport-portrait.jpg";
import pic3 from "./assets/technology/image-space-capsule-portrait.jpg";

const TechnologyPictures = (props) => {
  const changePicture = (vehicle) => {
    if (vehicle == "Toyota") {
      return (
        <Box>
          {" "}
          <Image
            boxSize={["450PX", "500px"]}
            src={pic}
            alt="Dan Abramov"
            objectFit={["contain"]}
          />
        </Box>
      );
    } else if (vehicle == "Rocket") {
      return (
        <Box>
          {" "}
          <Image
            boxSize="500px"
            src={pic2}
            alt="Dan Abramov"
            objectFit={["contain"]}
          />
        </Box>
      );
    } else if (vehicle == "Nav") {
      return (
        <Box>
          {" "}
          <Image
            boxSize="500px"
            src={pic3}
            alt="Dan Abramov"
            objectFit={["contain"]}
          />
        </Box>
      );
    }
  };
  return (
    <div>
      <Box className="titleM">
        <Text mb={[0]} ml={[0]} color={"white"}>
          SPACE LAUNCH
        </Text>
      </Box>
      <Flex justifyContent={["center", "end"]} direction={["column", "row"]}>
        <Box>{changePicture(props.vehicleType)}</Box>
      </Flex>
    </div>
  );
};

export default TechnologyPictures;
