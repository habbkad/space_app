import React from "react";
import "./Technology.css";
import { Box } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar/Navbar";
import TechnologyContent from "../../Components/TechnologyContent/TechnologyContent";

const Technology = () => {
  return (
    <div className="container_technology">
      <Box className="nav">
        <Navbar activeTech={{ borderBottom: "2px", borderColor: "#ccd0d5" }} />
      </Box>
      <Box>
        <TechnologyContent />
      </Box>
    </div>
  );
};

export default Technology;
