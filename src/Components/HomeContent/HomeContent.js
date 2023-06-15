import React from "react";
import "./HomeContent.css";
import { Text } from "@chakra-ui/react";
const HomeContent = () => {
  return (
    <div className="container">
      <div className="text_content">
        <Text fontSize="5xl"> TO SPACE</Text>
        <Text style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          voluptates veritatis, mollitia quas vero, magnam voluptatem, tempore
          sint id similique deserunt reiciendis. Illum, at officia. Dolorum
          provident debitis magni soluta!
        </Text>
      </div>
      <div className="explore_container">
        <div className="explore">
          <Text fontSize="5xl"> EXPLORE</Text>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
