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
  Text,
} from "@chakra-ui/react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "./shared/logo.svg";
import NavbarMobile from "./NavbarMobile";
const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <Flex
        justify={"space-between"}
        align={"center"}
        className="mobileNav"
        visibility={["visible", "hidden"]}
      >
        {" "}
        <Image src={logo} width="110px" height={"50px"} pr={10} pl={5} mt={4} />
        <Box ml={2}>
          {" "}
          <NavbarMobile />
        </Box>
      </Flex>
      <div className="navBar_Con">
        <Image src={logo} width="140px" height={"70px"} pr={10} pl={5} mt={2} />
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
          <Tabs ml={70} mt={4}>
            <Flex>
              <HStack spacing="90px" mt={3}>
                <Box
                  pb={4}
                  fontSize={"16px"}
                  as="button"
                  color={"milky"}
                  {...props.activeHome}
                  onClick={(e) => {
                    navigate("/");
                  }}
                >
                  <Flex>
                    <Text fontWeight={"bold"} mr={2} color={"milky"}>
                      00
                    </Text>{" "}
                    <Text color={"milky"}>Home</Text>{" "}
                  </Flex>
                </Box>

                <Box
                  pb={4}
                  fontSize={"16px"}
                  as="button"
                  color={"white"}
                  {...props.activeDestination}
                  onClick={(e) => {
                    navigate("/destination");
                  }}
                >
                  <Flex>
                    <Text fontWeight={"bold"} mr={2} color={"milky"}>
                      01
                    </Text>{" "}
                    <Text color={"milky"}>Destination</Text>{" "}
                  </Flex>
                </Box>

                <Box
                  pb={4}
                  fontSize={"16px"}
                  as="button"
                  color={"white"}
                  {...props.activeCrew}
                  onClick={(e) => {
                    navigate("/crew");
                  }}
                >
                  <Flex>
                    <Text fontWeight={"bold"} mr={2} color={"milky"}>
                      02
                    </Text>{" "}
                    <Text color={"milky"}>Crew</Text>{" "}
                  </Flex>
                </Box>

                <Box
                  pb={4}
                  fontSize={"16px"}
                  as="button"
                  color={"white"}
                  {...props.activeTech}
                  onClick={(e) => {
                    navigate("/technology");
                  }}
                >
                  <Flex>
                    <Text fontWeight={"bold"} mr={2} color={"milky"}>
                      03
                    </Text>{" "}
                    <Text color={"milky"}>Technology</Text>{" "}
                  </Flex>
                </Box>
              </HStack>
            </Flex>
          </Tabs>
        </Box>
      </div>
    </div>
  );
};

export default Navbar;
