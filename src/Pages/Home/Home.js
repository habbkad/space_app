import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import HomeContent from "../../Components/HomeContent/HomeContent";
import { Box, Flex, Container, Center, Circle } from "@chakra-ui/react";
import { getCrewData } from "../../hooks/getData";
import { useSelector, useDispatch } from "react-redux";
import { addToCrew } from "../../Redux/Reducer/reducer";
import NavbarMobile from "../../Components/Navbar/NavbarMobile";

const Home = () => {
  const dispach = useDispatch();

  return (
    <div className="container-home ">
      <Box>
        <div className="navbar">
          <Navbar
            activeHome={{ borderBottom: "2px", borderColor: "#ccd0d5" }}
          />
        </div>
        <div>
          <HomeContent />
        </div>
      </Box>
    </div>
  );
};

export default Home;
