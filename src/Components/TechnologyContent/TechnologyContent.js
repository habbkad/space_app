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
      <Box mt={[0, 0]}>
        <Flex visibility={["visible", "hidden"]} justify={"center"}>
          <Text
            color={"white"}
            letterSpacing={"3px"}
            mt={15}
            style={{ fontFamily: "BarlowCondensed" }}
            fontSize={["28px"]}
            opacity={0.6}
            mr={2}
          >
            03
          </Text>
          <Text
            color={"milky"}
            fontSize={["28px"]}
            style={{ fontFamily: "BarlowCondensed" }}
            letterSpacing={"3px"}
            mt={15}
          >
            SPACE LAUNCH 101
          </Text>
        </Flex>
        <Flex direction={["column-reverse", "row"]}>
          <Box width={["100%", "50%"]} ml={[0, "100px"]}>
            <Flex>
              <Box>
                <Box>
                  {" "}
                  <Flex visibility={["hidden", "visible"]}>
                    <Text
                      color={"white"}
                      letterSpacing={"3px"}
                      mt={15}
                      fontSize={["16px", "28px"]}
                      opacity={0.6}
                      style={{ fontFamily: "BarlowCondensed" }}
                      mr={2}
                    >
                      03
                    </Text>
                    <Text
                      color={"milky"}
                      fontSize={["16px", "28px"]}
                      letterSpacing={"3px"}
                      style={{ fontFamily: "BarlowCondensed" }}
                      mt={15}
                    >
                      SPACE LAUNCH
                    </Text>
                  </Flex>
                </Box>
                <TechnologyDetails
                  changeVehicleType={changeVehicleType}
                  active={active}
                  setActive={setActive}
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
