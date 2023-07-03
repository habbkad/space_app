import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

const CustomButton = (props) => {
  const [hasFocus, setFocus] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    props.changeVehicle(props.details);
  };

  return (
    <div>
      {" "}
      <Box
        as="button"
        height="70px"
        w={"70px"}
        border="1px"
        px="8px"
        m={[2, 0]}
        borderRadius="70px"
        bg={
          props.active === 1
            ? {
                bg: "#dddfe2",
              }
            : undefined
        }
        fontSize="24px"
        fontWeight="semibold"
        borderColor="#ccd0d5"
        color="white"
        _hover={{
          bg: "#dddfe2",
        }}
        _focus={{
          bg: "white",
          color: "black",
        }}
        onFocus={() => hasFocus}
        onClick={handleClick}
      >
        {props.number}
      </Box>
    </div>
  );
};

export default CustomButton;
