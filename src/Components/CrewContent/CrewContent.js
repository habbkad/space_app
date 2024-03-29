import React, { useState, useEffect } from "react";
import "./CrewContent.css";
import {
  Box,
  Center,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import CrewDetails from "./CrewDetails";
import CrewPictures from "./CrewPictures";
import one from "./assets/image-douglas-hurley.png";
import two from "./assets/image-mark-shuttleworth.webp";
import three from "./assets/image-victor-glover.png";
import four from "./assets/image-anousheh-ansari.png";

const CrewContent = (props) => {
  const [details, setDetails] = useState({
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  });
  const [radioBtn, setRadioBtn] = useState("1");
  const [pic, setPic] = useState();

  useEffect(() => {
    const getRespectDetails = (num) => {
      if (num == "1") {
        setDetails({
          name: "DOUGLARS HURLEY",
          role: "COMMANDER",
          bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        });
        setPic(one);
      } else if (num == "2") {
        setDetails({
          name: "MARK SHUTTLEWORTH",
          role: "MISSION SPECIALIST",
          bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        });
        setPic(two);
      } else if (num == "3") {
        setDetails({
          name: "VICTOR GLOVER",
          role: "PILOT",
          bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        });
        setPic(three);
      } else if (num == "4") {
        setDetails({
          name: "ANOUSEH ANSARI",
          role: "FLIGHT ENEGINEER",
          bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        });
        setPic(four);
      }
    };
    getRespectDetails(radioBtn);
  }, [radioBtn]);

  return (
    <div>
      <Box>
        {/* mobile title */}
        <Flex visibility={["visible", "hidden"]} justify={"center"} mb={5}>
          <Text
            color={"white"}
            letterSpacing={"3px"}
            mt={15}
            fontSize={["28px"]}
            style={{ fontFamily: "BarlowCondensed" }}
            opacity={0.6}
            mr={2}
          >
            02
          </Text>
          <Text
            color={"milky"}
            mt={15}
            fontSize={["28px"]}
            style={{ fontFamily: "BarlowCondensed" }}
            letterSpacing={"3px"}
          >
            MEET YOUR CREW
          </Text>
        </Flex>
        <Flex direction={["column-reverse", "row"]}>
          <Box
            color={"white"}
            h={[50, 100]}
            w={["100%", "50%"]}
            justifySelf="center"
          >
            <Box ml={[0, 40]}>
              <Flex
                direction={["column-reverse", "column"]}
                align={["center", "normal"]}
              >
                <Flex visibility={["hidden", "visible"]}>
                  <Text
                    color={"white"}
                    letterSpacing={"3px"}
                    mt={15}
                    style={{ fontFamily: "BarlowCondensed" }}
                    fontSize="28px"
                    opacity={0.6}
                    mr={2}
                  >
                    02
                  </Text>
                  <Text
                    color={"milky"}
                    style={{ fontFamily: "BarlowCondensed" }}
                    mt={15}
                    fontSize="28px"
                    letterSpacing={"3px"}
                  >
                    MEET YOUR CREW
                  </Text>
                </Flex>
              </Flex>
              <Flex
                direction={["column-reverse", "column"]}
                align={["center", "normal"]}
              >
                <CrewDetails details={details} />
                <Box mt={[10, 10]}>
                  <RadioGroup onChange={setRadioBtn} value={radioBtn}>
                    <Stack direction="row" mt={[10, 0]}>
                      <Radio colorScheme="milky" value="1"></Radio>
                      <Radio colorScheme="milky" value="2"></Radio>
                      <Radio colorScheme="milky" value="3"></Radio>
                      <Radio colorScheme="milky" value="4"></Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box color={"white"} h={[350, 400]} w={["100%", "50%"]}>
            <CrewPictures pic={pic} />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default CrewContent;
