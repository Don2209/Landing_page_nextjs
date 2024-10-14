"use client"; // Marking this as a client component

import { StargateColors } from "#/src/utils/Colors";
import { Flex, Heading, Text, Image, Button, Tooltip } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import Copywriting from "./categories/copywriting";
import Design from "./categories/design";
import Development from "./categories/development";
import Marketing from "./categories/marketing";
import Video from "./categories/video";
import SocialMedia from "./categories/socialMedia";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"; // Importing icons for arrows

// Define your categories here
const Categories = [
  "Copywriting",
  "Design",
  "Development",
  "Marketing",
  "Video",
  "Social Media",
];

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  hoverContent: string;
}

// Card component for displaying the app information
const Card: React.FC<CardProps> = ({ image, title, description, buttonText, hoverContent }) => {
  return (
    <Tooltip label={hoverContent} placement="top" hasArrow bg="gray.700" color="white">
      <Flex
        position="relative"
        direction="column"
        align="center"
        justify="flex-end"
        bg="transparent"
        borderRadius="12px"
        boxShadow="md"
        minW="300px"
        maxW="300px"
        h="400px"
        overflow="hidden"
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        _hover={{
          transform: 'scale(1.05)', // Scale on hover
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
        }}
      >
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
        />
        
        <Flex
          direction="column"
          justify="flex-end"
          align="center"
          w="100%"
          h="100%"
          bgGradient="linear(to-t, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))"
          p={4}
          zIndex={1}
        >
          <Text fontSize="sm" color="white" textTransform="uppercase">
            {title}
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="white" textAlign="center" mt={2} mb={4}>
            {description}
          </Text>
          <Button size="sm" bg="lightgreen" color="white" mt={2} _hover={{ bg: "green.300" }}>
            {buttonText}
          </Button>
        </Flex>
      </Flex>
    </Tooltip>
  );
};

const Product = () => {
  const [currentCategory, setCurrentCategory] = useState("copywriting");
  const scrollRef = useRef<HTMLDivElement | null>(null); // Reference for scrollable area

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <Flex
      id="product"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      pt={6}
      pb={{
        base: 6,
        md: 12,
      }}
      px={{
        base: 0,
        md: 10,
      }}
      maxW={1200}
      mx={{
        base: 2,
        xl: "auto",
      }}
      border={`1px solid ${StargateColors.lightBg}`}
      borderRadius={24}
    >

      {/* Scrollable Card Section */}
      <Flex
        w="100%"
        gap={4}
        overflowX="hidden"
        position="relative"
      >
        {/* Left Navigation Button */}
        <Button
          onClick={scrollLeft}
          position="absolute"
          left={2}
          zIndex={1}
          bg="lightgreen"
          borderRadius="50%"
          height="40px"
          width="40px"
          boxShadow="md"
          _hover={{ bg: "green.300" }}
        >
          <ChevronLeftIcon color="white" />
        </Button>

        <Flex
          ref={scrollRef}
          w="100%"
          overflowX="scroll"
          px={4}
          py={6}
          className="hide-scrollbar"
          justify="center"
          gap={6} // Adjusted gap between cards
        >
          <Card
            image="http://localhost:3000/course_b.jpg"  // Replace with the actual image path
            title="Empower your teaching with AMAI Course Builder – where creating courses is as easy as a click!"
            description="AMAI Course Builder"
            buttonText="Coming Soon"
            hoverContent="An all-in-one platform for creating personalized, AI-generated courses. Features adaptive learning paths, interactive content, and real-time progress tracking. Empowers educators and learnes to create and share knowledge efficiently."
          />
          <Card
            image="http://localhost:3000/story_teller.jpg"  // Replace with the actual image path
            title="Unleash your imagination with AMAI Story Teller – your personal AI-powered storyteller!"
            description="AMAI STORY TELLER"
            buttonText="Coming Soon"
            hoverContent="AI-powered storytelling app that enhances children's creativity and critical thinking. Generates culturally relevant stories that adapt to the child's reading level and interests. Includes interactive elements to boost engagement and comprehension."
          />
           <Card
            image="http://localhost:3000/Amai_tab.jpg"  // Replace with the actual image path
            title=" Experience learning and storytelling like never before with AMAI Tablet – your gateway to endless possibilities!"
            description="AMAI Tablet"
            buttonText="Cooming Soon"
            hoverContent="A low-cost, AI-enhanced tablet designed for African learners. Preloaded with educational content that works offline. Features like handwriting recognition, voice-to-text, and AI tutoring support diverse learning needs."
          />
          {/* Add more cards as needed */}
        </Flex>

        {/* Right Navigation Button */}
        <Button
          onClick={scrollRight}
          position="absolute"
          right={2}
          zIndex={1}
          bg="lightgreen"
          borderRadius="50%"
          height="40px"
          width="40px"
          boxShadow="md"
          _hover={{ bg: "green.300" }}
        >
          <ChevronRightIcon color="white" />
        </Button>
      </Flex>

      <Heading textAlign={"center"} px={2}>
        ... But what can AMAI do for You?
      </Heading>

      {/* Category selection */}
      <Flex
        gap={4}
        py={5}
        px={4}
        mt={5}
        borderBottom={`1px solid ${StargateColors.lightBg}`}
        justify={"center"}
        overflowX={"scroll"}
        w={"100%"}
        className="hide-scrollbar"
      >
        {Categories.map((category) => (
          <Flex
            key={category}
            cursor={"pointer"}
            onClick={() => setCurrentCategory(category.toLowerCase())}
            px={4}
            py={2}
            w={"fit-content"}
            flexWrap={"nowrap"}
            borderRadius={12}
            transition={"all 0.25s ease"}
            {...(currentCategory === category.toLowerCase() ? {
              bg: "lightgreen",
              color: "white",
              fontWeight: "bold"
            } : {
              bg: "transparent",
              color: "gray.600"
            })}
          >
            {category}
          </Flex>
        ))}
      </Flex>

      {/* Dynamic Category Rendering */}
      <AnimatePresence mode="wait"> {/* Update here */}
        <Flex direction={"column"} align={"center"} width="100%">
          {currentCategory === "copywriting" && <Copywriting />}
          {currentCategory === "design" && <Design />}
          {currentCategory === "development" && <Development />}
          {currentCategory === "marketing" && <Marketing />}
          {currentCategory === "video" && <Video />}
          {currentCategory === "social media" && <SocialMedia />}
        </Flex>
      </AnimatePresence>
    </Flex>
  );
};

export default Product;
