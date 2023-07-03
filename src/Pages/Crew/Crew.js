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

      <CrewContent />
    </div>
  );
};

export default Crew;
