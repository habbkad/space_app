import React from "react";
import { Image, Box, Center } from "@chakra-ui/react";

const CrewPictures = ({ pic }) => {
  return (
    <div>
      <Box>
        <Center>
          <Box
            boxSize={["sm", "md"]}
            align={["center", "normal"]}
            p={[5, 0]}
            justify={["center"]}
          >
            <Image
              src={pic}
              alt="Dan Abramov"
              boxSize={["440px", "550px"]}
              objectFit={["contain"]}
            />
          </Box>
        </Center>
      </Box>
    </div>
  );
};

export default CrewPictures;
