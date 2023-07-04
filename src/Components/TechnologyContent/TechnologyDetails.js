import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
const TechnologyDetails = (props) => {
  const [vehicle, setVehicle] = useState("Toyota");

  const active = props.active;

  const changeVehicle = (type) => {
    setVehicle(type);
    props.changeVehicleType(type);
  };

  const channgeDetails = (vehicle) => {
    if (vehicle == "Toyota") {
      return (
        <Box>
          <Heading
            fontSize={["28px", "38px"]}
            textAlign={["center", "start"]}
            fontWeight={"normal"}
            style={{ fontFamily: "Bellefair" }}
            mb={10}
          >
            LAUNCH VEHICLE
          </Heading>
          <Text textAlign={["center", "start"]}>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </Text>
        </Box>
      );
    } else if (vehicle == "Rocket") {
      return (
        <Box>
          <Heading
            fontSize={["28px", "38px"]}
            textAlign={["center", "start"]}
            fontWeight={"normal"}
            style={{ fontFamily: "Bellefair" }}
            mb={10}
          >
            SPACEPORT
          </Heading>
          <Text textAlign={["center", "start"]}>
            A spaceport or cosmodrome is a site for launching (or receiving)
            spacecraft, by analogy to the seaport for ships or airport for
            aircraft. Based in the famous Cape Canaveral, our spaceport is
            ideally situated to take advantage of the Earth’s rotation for
            launch.
          </Text>
        </Box>
      );
    } else if (vehicle == "Nav") {
      return (
        <Box>
          <Heading
            fontSize={["28px", "38px"]}
            textAlign={["center", "start"]}
            fontWeight={"normal"}
            style={{ fontFamily: "Bellefair" }}
            mb={10}
          >
            SPACE CAPSULE
          </Heading>
          <Text textAlign={["center", "start"]}>
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </Text>
        </Box>
      );
    }
  };

  return (
    <div>
      <Box>
        <Box className="title">
          <Text mb={[0, 100]} ml={150} color={"white"}></Text>
        </Box>

        <Flex direction={["column", "row"]}>
          <Flex
            w={["100%", "20%"]}
            direction={["row", "column"]}
            justify={["center", "normal"]}
          >
            <CustomButton
              active={active}
              number={1}
              details={"Toyota"}
              changeVehicle={changeVehicle}
            />
            <br />
            <CustomButton
              active={active}
              number={2}
              details={"Rocket"}
              changeVehicle={changeVehicle}
            />
            <br />
            <CustomButton
              active={active}
              number={3}
              details={"Nav"}
              changeVehicle={changeVehicle}
            />
          </Flex>
          <Box color={"white"} w={["100%", "60%"]} mt={[10, 0]} p={[2, 0]}>
            <Text
              color={"bluey"}
              letterSpacing={"2px"}
              textAlign={["center", "start"]}
              fontSize={"16px"}
              style={{ fontFamily: "BarlowCondensed" }}
              mb={[2, 4]}
            >
              THE TECHNOLOGY...
            </Text>

            {channgeDetails(vehicle)}
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default TechnologyDetails;
