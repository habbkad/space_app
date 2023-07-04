import React from "react";
import "./HomeContent.css";
import { Box, Heading, Text } from "@chakra-ui/react";
const HomeContent = () => {
  return (
    <div className="container">
      <div className="text_content">
        <Text
          fontSize={["26px", "4xl"]}
          textAlign={["normal", "center"]}
          color={"bluey"}
          letterSpacing={["3px", "5px"]}
          style={{ fontFamily: "BarlowCondensed" }}
        >
          {" "}
          SO, YOU WANT TO TRAVEL TO
        </Text>
        <Text
          fontSize={["100px", "150px"]}
          textAlign={["normal", "center"]}
          color={"milky"}
          letterSpacing={"5px"}
          style={{ fontFamily: "Bellefair" }}
        >
          {" "}
          SPACE
        </Text>{" "}
        <Text color={"bluey"} ml={[0, "16%"]} w={["98%", "60%"]}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Text>
      </div>
      <Box className="explore_container">
        <Box className="explore_h">
          <div className="explore">
            <Heading
              fontSize={["32px"]}
              fontWeight={"thin"}
              fontFamily={"heading"}
            >
              {" "}
              EXPLORE
            </Heading>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default HomeContent;
