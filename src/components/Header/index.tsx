"use client";
import { Button, Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HeroBottomSVG from "./HeroBottomSVG";
import { LuZap } from "react-icons/lu";
import Link from "next/link";

const content = [
  {
    word: "Copywriter",
    image: "http://localhost:3000/banner.png",
    text: "Crafting compelling narratives that engage and convert.",
  },
  {
    word: "Assistant",
    image: "http://localhost:3000/banner2.jpg",
    text: "Your intelligent assistant for better productivity.",
  },
  {
    word: "Marketer",
    image: "http://localhost:3000/banner3.jpg",
    text: "Elevate your marketing strategy with AI insights.",
  },
  {
    word: "Developer",
    image: "http://localhost:3000/banner4.jpg",
    text: "Building smarter solutions with AI at the core.",
  },
  {
    word: "Strategist",
    image: "http://localhost:3000/banner5.jpg",
    text: "Strategizing for the future with advanced analytics.",
  },
  {
    word: "Creator",
    image: "http://localhost:3000/banner6.jpg",
    text: "Creating innovative solutions that inspire.",
  },
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      as={motion.div}
      initial="initial"
      animate="animate"
      minH="100vh"
      position={"relative"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      px={2}
      bgSize={"cover"}
      bgPosition={"center"}
      overflow="hidden"
    >
      {/* Background Image Animation */}
      <AnimatePresence>
        <motion.div
          key={content[currentIndex].image}
          initial={{ opacity: 5, scale: 1.1 }} // Initial state
          animate={{ opacity: 8, scale: 1 }} // Animate to full opacity and normal scale
          exit={{ opacity: 0, scale: 1.1 }} // Exit state
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${content[currentIndex].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1, // Set to behind other elements
          }}
        />
      </AnimatePresence>

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
        color={"#ffffff"}
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
          key={content[currentIndex].word}
          color={"#ffffff"}
          lineHeight={1}
          initial={{ opacity: 0.2, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0.2, filter: "blur(4px)" }}
          zIndex={1}
        >
          {content[currentIndex].word}
        </Heading>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <Text
          as={motion.p}
          fontSize={{ base: 18, md: 24 }}
          key={content[currentIndex].text}
          color={"#ffffff"}
          lineHeight={1.5}
          initial={{ opacity: 0.2, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0.2, filter: "blur(4px)" }}
          zIndex={1}
          mt={5}
        >
          {content[currentIndex].text}
        </Text>
      </AnimatePresence>

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
        color={"#ffffff"}
        opacity={0.75}
        transition={"all .25s ease"}
        _hover={{ opacity: 1 }}
        zIndex={1}
      >
        Discover AMAI
      </Text>
      <HeroBottomSVG />

      <Flex
        position="absolute"
        right={0}
        bottom={0}
        zIndex={0}
        pr={5}
        pb={5}
      >
        <Box
          width={["200px", "250px", "300px"]}
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
        >
          <Image 
            src="http://localhost:3000/question chat.png"
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
