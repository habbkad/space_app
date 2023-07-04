import {
  IconButton,
  Button,
  useDisclosure,
  Box,
  DrawerContent,
  Drawer,
  DrawerBody,
  Input,
  DrawerFooter,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  Text,
  Flex,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { FiMenu, FiBell } from "react-icons/fi";

import { BsThreeDotsVertical, BsChatSquareQuote } from "react-icons/bs";
import { MdDensityMedium } from "react-icons/md";
import { RiShutDownLine, RiRestartLine, RiFileShredLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function ServerSecondaryOptions() {
  const btnRef = useRef();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <IconButton
        aria-label="More server options"
        icon={<MdDensityMedium />}
        variant="solid"
        w="50px"
        colorScheme={"milky"}
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundColor={"#173655"}
          opacity={0.9}
          backdropBlur={0.2}
        >
          <DrawerCloseButton color={"milky"} />

          <DrawerBody>
            <Flex
              mt={"100PX"}
              onClick={(e) => {
                navigate("/");
              }}
            >
              <Text
                fontWeight={"bold"}
                style={{ fontFamily: "BarlowCondensed" }}
                mr={2}
                color={"milky"}
              >
                00
              </Text>{" "}
              <Text color={"milky"} style={{ fontFamily: "BarlowCondensed" }}>
                HOME
              </Text>{" "}
            </Flex>
            <Flex
              mt={10}
              onClick={(e) => {
                navigate("/destination");
              }}
            >
              <Text
                fontWeight={"bold"}
                style={{ fontFamily: "BarlowCondensed" }}
                mr={2}
                color={"milky"}
              >
                01
              </Text>{" "}
              <Text color={"milky"} style={{ fontFamily: "BarlowCondensed" }}>
                DESTINATION
              </Text>{" "}
            </Flex>
            <Flex
              mt={10}
              onClick={(e) => {
                navigate("/crew");
              }}
            >
              <Text
                fontWeight={"bold"}
                style={{ fontFamily: "BarlowCondensed" }}
                mr={2}
                color={"milky"}
              >
                02
              </Text>{" "}
              <Text color={"milky"} style={{ fontFamily: "BarlowCondensed" }}>
                CREW
              </Text>{" "}
            </Flex>
            <Flex
              mt={10}
              onClick={(e) => {
                navigate("/technology");
              }}
            >
              <Text
                fontWeight={"bold"}
                mr={2}
                color={"milky"}
                style={{ fontFamily: "BarlowCondensed" }}
              >
                03
              </Text>{" "}
              <Text color={"milky"} style={{ fontFamily: "BarlowCondensed" }}>
                TECHNOLOGY
              </Text>{" "}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
  /**
   * You may move the Popover outside Flex.
   */
  // <Flex justifyContent="center" mt={4}>
  //   <Popover placement="bottom" isLazy>
  //     <PopoverTrigger>
  //       <IconButton
  //         aria-label="More server options"
  //         icon={<MdDensityMedium />}
  //         variant="solid"
  //         w="50px"
  //         colorScheme={"milky"}
  //       />
  //     </PopoverTrigger>
  //     <PopoverContent w="fit-content">
  //       <PopoverArrow />
  //       <PopoverBody>
  //         <Stack>
  //           <Button
  //             w="194px"
  //             variant="ghost"
  //             justifyContent="space-between"
  //             fontWeight="normal"
  //             fontSize="sm"
  //             onClick={(e) => {
  //               navigate("/");
  //             }}
  //           >
  //             Home{" "}
  //           </Button>
  //           <Button
  //             w="194px"
  //             variant="ghost"
  //             justifyContent="space-between"
  //             fontWeight="normal"
  //             colorScheme="red"
  //             fontSize="sm"
  //             onClick={(e) => {
  //               navigate("/destination");
  //             }}
  //           >
  //             Destination
  //           </Button>
  //           <Button
  //             w="194px"
  //             variant="ghost"
  //             justifyContent="space-between"
  //             fontWeight="normal"
  //             colorScheme="red"
  //             fontSize="sm"
  //             onClick={(e) => {
  //               navigate("/crew");
  //             }}
  //           >
  //             Crew
  //           </Button>
  //           <Button
  //             w="194px"
  //             variant="ghost"
  //             justifyContent="space-between"
  //             fontWeight="normal"
  //             colorScheme="red"
  //             fontSize="sm"
  //             onClick={(e) => {
  //               navigate("/technology");
  //             }}
  //           >
  //             Technology
  //           </Button>
  //         </Stack>
  //       </PopoverBody>
  //     </PopoverContent>
  //   </Popover>
  // </Flex>
}
