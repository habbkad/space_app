import React from "react";
import "./Crew.css";
import {
  Box,
  Flex,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  Text,
  TabPanels,
} from "@chakra-ui/react";
import Navbar from "../../Components/Navbar/Navbar";
import CrewContent from "../../Components/CrewContent/CrewContent";

const Crew = () => {
  return (
    <div className="container_crew">
      <div className={"nav"}>
        {" "}
        <Navbar activeCrew={{ borderBottom: "2px", borderColor: "#ccd0d5" }} />
      </div>

      <Text color={"white"} mt={15} fontSize="3xl">
        Meet your crew
      </Text>
      <CrewContent />
    </div>
  );
};

export default Crew;
