import React, { useState, useEffect } from "react";
import "./DestinationContent.css";
import {
  Flex,
  Box,
  Text,
  Tab,
  TabPanel,
  TabList,
  Tabs,
  HStack,
  Button,
  Center,
} from "@chakra-ui/react";
import PlanentsDetails from "./PlanentsDetails";
import PlanetPctures from "./PlanetPctures";
import moonPic from "./assets/destination/image-moon.png";
import marsPic from "./assets/destination/image-mars.png";
import europaPic from "./assets/destination/image-europa.png";
import titanPic from "./assets/destination/image-titan.png";
import { getDestination, getPlanetdata } from "../../hooks/getData";

const DestinationContent = () => {
  const [planet, setPlanet] = useState("Moon");
  const [data, setData] = useState([]);
  //holds data for each planet
  let planetDetails = {};

  useEffect(() => {
    const get_destinations = async () => {
      let { destinations } = await getDestination();
      //get data from api to state
      setData([...destinations]);
    };

    get_destinations();
  }, []);
  //console.log(data);
  const changingPlanets = (planet) => {
    if (data !== []) {
      //get data for each planet in object
      for (const i of data) {
        if (planet == i.name) {
          planetDetails = i;
          // console.log(i);
        }
      }
    }

    if (planet == "Moon") {
      return (
        <Box ml={[2, 8]}>
          <PlanentsDetails
            planet={"Moon"}
            details={{
              description:
                "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
              distance: "384,400 km",
              travel: "3 days",
            }}
          />
        </Box>
      );
    } else if (planet == "Mars") {
      return (
        <Box ml={[2, 8]}>
          <PlanentsDetails
            planet={"Mars"}
            details={{
              description:
                "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
              distance: "225 mil. km",
              travel: "9 months",
            }}
          />
        </Box>
      );
    } else if (planet == "Europa") {
      return (
        <Box ml={[2, 8]}>
          <PlanentsDetails
            planet={"Europa"}
            details={{
              description:
                "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
              distance: "628 mil. km",
              travel: "3 years",
            }}
          />
        </Box>
      );
    } else if (planet == "Titan") {
      return (
        <Box ml={[2, 8]}>
          <PlanentsDetails
            planet={"Titan"}
            details={{
              description:
                "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
              distance: "1.6 bil. km",
              travel: "7 years",
            }}
          />
        </Box>
      );
    }
  };
  const changingPictures = (planet) => {
    if (data !== []) {
      for (const i of data) {
        if (planet == i.name) {
          planetDetails = i;
          //console.log(i);
        }
      }
    }
    if (planet == "Moon") {
      return (
        <Box ml={[2, 8]}>
          <PlanetPctures picture={moonPic} details={planetDetails.images} />
        </Box>
      );
    } else if (planet == "Mars") {
      return (
        <Box ml={[2, 8]}>
          <PlanetPctures picture={marsPic} details={planetDetails.images} />
        </Box>
      );
    } else if (planet == "Europa") {
      return (
        <Box ml={[2, 8]}>
          <PlanetPctures picture={europaPic} details={planetDetails.images} />
        </Box>
      );
    } else if (planet == "Titan") {
      return (
        <Box ml={[2, 8]}>
          <PlanetPctures picture={titanPic} details={planetDetails.images} />
        </Box>
      );
    }
  };
  return (
    <div>
      <Flex mt={[5, 5, 50]} direction={["column", "column", "row"]}>
        <Box w={["100%", "50%"]} color="white">
          <div id="planet_pic">
            <Text>{changingPictures(planet)}</Text>
          </div>
        </Box>
        <Box w={["100%", "50%"]} color="white" m={[1, 1, 10]}>
          <Box>
            <Flex>
              <Button
                colorScheme="teal"
                variant="gost"
                id="planets"
                fontFamily={"BarlowCondensed"}
                ml={15}
                fontSize={"16px"}
                letterSpacing={1}
                color={"bluey"}
                onClick={(e) => {
                  setPlanet("Moon");
                }}
              >
                Moon
              </Button>
              <Button
                colorScheme="teal"
                variant="gost"
                id="planets"
                ml={15}
                letterSpacing={1}
                fontSize={"16px"}
                fontFamily={"BarlowCondensed"}
                color={"bluey"}
                onClick={(e) => {
                  setPlanet("Mars");
                }}
              >
                {" "}
                Mars
              </Button>
              <Button
                colorScheme="teal"
                variant="gost"
                id="planets"
                ml={15}
                fontSize={"16px"}
                letterSpacing={1}
                fontFamily={"BarlowCondensed"}
                color={"bluey"}
                onClick={(e) => {
                  setPlanet("Europa");
                }}
              >
                {" "}
                Europa
              </Button>
              <Button
                colorScheme="teal"
                variant="gost"
                id="planets"
                ml={15}
                letterSpacing={1}
                fontSize={"16px"}
                color={"bluey"}
                fontFamily={"BarlowCondensed"}
                onClick={(e) => {
                  setPlanet("Titan");
                }}
              >
                Titan
              </Button>
            </Flex>
          </Box>
          {changingPlanets(planet)}
        </Box>
      </Flex>
    </div>
  );
};

export default DestinationContent;
