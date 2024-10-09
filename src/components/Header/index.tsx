"use client";
import { Button, Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HeroBottomSVG from "./HeroBottomSVG";
import { LuZap } from "react-icons/lu";
import Link from "next/link";

const words = [
  "Copywriter",
  "Assistant",
  "Marketer",
  "Developer",
  "Strategist",
  "Creator",
];

const Header = () => {
  const [currentWord, setCurrentWord] = useState<string>(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCurrentWord(words[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Flex
      as={motion.div}
      initial="initial"
      animate="animate"
      minH="100vh" // Use full viewport height
      position={"relative"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      px={2}
      bgImage={"url('http://localhost:3000/banner.png')"} // Replace with your image path
      bgSize={"100%"} // Zoom out the image by setting a higher percentage
      bgPosition={"center"} // Center the image
      overflow="hidden" // Ensure no overflow issues
    >
      <Flex
        bg={"#ffffff50"} 
        px={4} 
        rounded={"full"} 
        mb={5} 
        zIndex={1}
      >
        <Text color={"#38b448"} fontSize={"xs"}>
          Unleash The Power of AI
        </Text>
      </Flex>
      <Heading
        fontSize={{
          base: 48,
          md: 64,
          lg: 84,
        }}
        color={"#ffffff"} // Change color for better contrast
        lineHeight={1}
        textAlign={"center"}
        zIndex={1}
      >
        Your Ultimate
      </Heading>
      <AnimatePresence mode="wait">
        <Heading
          as={motion.h1}
          fontSize={{
            base: 48,
            md: 64,
            lg: 84,
          }}
          key={currentWord}
          color={"#ffffff"} // Change color for better contrast
          lineHeight={1}
          initial={{ opacity: 0.2, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0.2, filter: "blur(4px)" }}
          zIndex={1}
        >
          {currentWord}
        </Heading>
      </AnimatePresence>
      <Text color={"#ffffff"} maxW={300} textAlign={"center"} mt={5} zIndex={1}>
        Elevating AI: The Ultimate Platform for Intelligent Solutions
      </Text>
      <Button
        leftIcon={<LuZap />}
        as={motion.a}
        href={"#"}
        whileHover={{ scale: 1.1 }}
        size={"lg"}
        mt={5}
        gap={2}
        cursor={"pointer"}
        bg={"#38b448"}
        color={"white"}
        _hover={{ bg: "#2e9237" }}
        zIndex={1}
      >
        START FOR FREE
      </Button>
      <Text
        mt={2}
        as={Link}
        href={"#features"}
        color={"#ffffff"} // Change color for better contrast
        opacity={0.75}
        transition={"all .25s ease"}
        _hover={{ opacity: 1 }}
        zIndex={1}
      >
        Discover AMAI
      </Text>
      <HeroBottomSVG />

      {/* Card Image on the right side */}
      <Flex
        position="absolute" // Use absolute positioning
        right={0} // Align to the right
        bottom={0} // Align to the bottom
        zIndex={0} // Send it behind the header
        pr={5} // Add some padding to the right
        pb={5} // Add some padding to the bottom
      >
        <Box
          width={["200px", "250px", "300px"]} // Responsive width
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
        >
          <Image 
            src="http://localhost:3000/question chat.png" // Replace with your card image path
            alt="Card Image"
            width="100%"
            height="auto"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
