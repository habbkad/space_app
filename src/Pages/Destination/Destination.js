import React, { useEffect } from "react";
import "./Destination.css";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar/Navbar";
import DestinationContent from "../../Components/DestinationContent/DestinationContent";
import axios from "axios";

const Destination = () => {
  return (
    <div className="container_destination">
      <div className="nav">
        <Navbar
          activeDestination={{ borderBottom: "2px", borderColor: "#ccd0d5" }}
        />
      </div>

      <DestinationContent />
    </div>
  );
};

export default Destination;
