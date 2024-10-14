"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Button, Flex, Heading, Text, IconButton } from "@chakra-ui/react";
import React from "react";
import FooterTopSVG from "./FooterTopSVG";
import FooterBg from "./FooterBg";
import { LuArrowRight } from "react-icons/lu";
import { motion } from "framer-motion";
import { FaDiscord, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";  // Social Media Icons

const Footer = () => {
  return (
    <Flex
      py={32}
      position={"relative"}
      justify={"center"}
      align={"center"}
      direction={"column"}
      id="footer"
      w={"full"}
    >
      <FooterTopSVG />
      <FooterBg />
      <Flex mt={16} direction={"column"} align={"center"} px={2}>
        <Flex bg={"#ffffff50"} pr={4} rounded={"full"} mb={5}>
          <Text color={StargateColors.white} fontSize={"xs"}>
            <Text
              as="span"
              fontWeight={600}
              bg={"#ffffff50"}
              px={2}
              rounded={"full"}
              mr={1}
            >
              AMAI
            </Text>{" "}
            The only AI tool you will ever need
          </Text>
        </Flex>
        <Heading
          fontSize={{
            base: 72,
            md: 96,
          }}
          textAlign={"center"}
          color="transparent"
          maxW={500}
          fontWeight={800}
          style={{
            backgroundImage: "linear-gradient(315deg, #ffffff 60%, #000000)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
        </Heading>

        <Button
          rightIcon={<LuArrowRight />}
          as={motion.a}
          href={"#"}
          target="_b"
          whileHover={{ scale: 1.1 }}
          size={"lg"}
          mt={5}
          gap={2}
          cursor={"pointer"}
        >
          Get Started
        </Button>
      </Flex>

      {/* Footer Bottom with Copyright and Social Media */}
      <Flex
        justify={"space-between"}
        align={"center"}
        w={"full"}
        px={8}
        position={"absolute"}  /* Use absolute positioning */
        bottom={0}  /* Pin to the bottom */
        py={4}  /* Add some padding */
        bg={"rgba(0, 0, 0, 0.7)"}  /* Optional background to separate from content */
      >
        {/* Copyright */}
        <Text color={StargateColors.white}>
          {new Date().getFullYear()} - All rights reserved
        </Text>

        {/* Social Media Icons */}
        <Flex gap={4}>
          <IconButton
            as={"a"}
            href="https://discord.com"
            target="_blank"
            aria-label="Discord"
            icon={<FaDiscord />}
            size="lg"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
          <IconButton
            as={"a"}
            href="https://twitter.com"
            target="_blank"
            aria-label="Twitter"
            icon={<FaTwitter />}
            size="lg"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
          <IconButton
            as={"a"}
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            icon={<FaFacebook />}
            size="lg"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
          <IconButton
            as={"a"}
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
            icon={<FaInstagram />}
            size="lg"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
