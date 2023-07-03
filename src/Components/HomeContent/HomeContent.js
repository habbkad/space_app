import React from "react";
import "./HomeContent.css";
import { Box, Heading, Text } from "@chakra-ui/react";
const HomeContent = () => {
  return (
    <div className="container">
      <div className="text_content">
        <Text fontSize="5xl"> TO SPACE</Text>
        <Text textAlign={["center"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          voluptates veritatis, mollitia quas vero, magnam voluptatem, tempore
          sint id similique deserunt reiciendis. Illum, at officia. Dolorum
          provident debitis magni soluta!
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
