import React from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Flex,
  Spacer,
  HStack,
  Image,
  Center,
} from "@chakra-ui/react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "./shared/logo.svg";

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <div className="navBar_Con">
      <Image src={logo} width="110px" height={"50px"} pr={10} pl={5} mt={4} />
      <Box
        mt={"41px"}
        w="40%"
        h="2px"
        backgroundColor={" rgba(251, 245, 245, 0.221)"}
      ></Box>
      <Box />
      <Box
        w="60%"
        h="70px"
        backgroundColor={" rgba(251, 245, 245, 0.221)"}
        mt="5px"
      >
        <Tabs ml={100} mt={4}>
          <Flex>
            <HStack spacing="120px" mt={3}>
              <Box
                pb={2}
                fontSize={20}
                as="button"
                color={"white"}
                {...props.activeHome}
                onClick={(e) => {
                  navigate("/");
                }}
              >
                Home
              </Box>

              <Box
                pb={2}
                fontSize={20}
                as="button"
                color={"white"}
                {...props.activeDestination}
                onClick={(e) => {
                  navigate("/destination");
                }}
              >
                Destination
              </Box>

              <Box
                pb={2}
                fontSize={20}
                as="button"
                color={"white"}
                {...props.activeCrew}
                onClick={(e) => {
                  navigate("/crew");
                }}
              >
                Crew
              </Box>

              <Box
                pb={2}
                fontSize={20}
                as="button"
                color={"white"}
                {...props.activeTech}
                onClick={(e) => {
                  navigate("/technology");
                }}
              >
                Technology
              </Box>
            </HStack>
          </Flex>
        </Tabs>
      </Box>
    </div>
  );
};

export default Navbar;
