import React, { useState } from "react";
import "./TechnologyContent.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import TechnologyDetails from "./TechnologyDetails";
import TechnologyPictures from "./TechnologyPictures";

const TechnologyContent = () => {
  const [active, setActive] = useState(1);
  const [vehicleType, setVehicleType] = useState("Toyota");

  const changeVehicleType = (type) => {
    setVehicleType(type);
    console.log(type);
  };
  return (
    <div>
      <Box mt={[10, 20]}>
        <Flex direction={["column-reverse", "row"]}>
          <Box width={["100%", "50%"]} ml={[0, "100px"]}>
            <Flex>
              <Box>
                <Box className="title">
                  {" "}
                  <Flex>
                    <Text
                      color={"white"}
                      letterSpacing={"3px"}
                      mt={15}
                      fontSize="28px"
                      opacity={0.6}
                      mr={2}
                    >
                      03
                    </Text>
                    <Text
                      color={"milky"}
                      mt={15}
                      fontSize="28px"
                      letterSpacing={"3px"}
                    >
                      SPACE LAUNCH
                    </Text>
                  </Flex>
                </Box>
                <TechnologyDetails
                  changeVehicleType={changeVehicleType}
                  active={active}
                />
              </Box>
              <Box></Box>
            </Flex>
          </Box>
          <Box width={["100%", "50%"]}>
            <TechnologyPictures vehicleType={vehicleType} />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default TechnologyContent;
