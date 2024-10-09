"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  LuBot,
  LuBriefcase,
  LuCreditCard,
  LuFileQuestion,
  LuGauge,
  LuGitFork,
  LuLanguages,
  LuLayoutTemplate,
  LuLifeBuoy,
  LuScale3D,
} from "react-icons/lu";

const Features = () => {
  return (
    <Flex
      id="features"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      px={2}
      maxW={1200}
      mx={"auto"}
    >
      <Heading
        fontSize={{
          base: 32,
          md: 48,
        }}
        textAlign={"center"}
      >
        Your Favourite AI Tool
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={10}
        my={10}
      >
        {Cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title}>
            {card.text}
          </Card>
        ))}
      </Grid>
    </Flex>
  );
};

interface CardProps {
  icon: IconType;
  title: string;
  children: ReactNode;
}

const Card = ({ icon, title, children }: CardProps) => (
  <Flex maxW={350} role="group">
    <Icon
      as={icon}
      fontSize={48}
      mr={5}
      p={2}
      bg={StargateColors.lightGrey}
      rounded={"md"}
      strokeWidth={1.5}
      transition={"all 0.25s ease"}
      _groupHover={{
        bg: StargateColors.black,
        color: StargateColors.white,
        shadow: "dark-lg",
        transform: "scale(1.1)",
      }}
    />
    <Flex direction={"column"} gap={1}>
      <Heading fontSize={"xl"}>{title}</Heading>
      <Text fontSize={"small"} color={StargateColors.grey}>
        {children}
      </Text>
    </Flex>
  </Flex>
);

const Cards = [
  {
    icon: LuLanguages,
    title: "Cultural and Linguistic Relevance",
    text: "Supports multiple African languages and dialects, integrates proverbs and cultural knowledge, and provides culturally sensitive responses.",
  },
  {
    icon: LuGauge,
    title: "Educational and Skill Development",
    text: "Offers curriculum-aligned learning support, language translation, and educational resources for youth, professionals, and communities, focusing on African context and knowledge.",
  },
  {
    icon: LuBot,
    title: "Ethical AI and Privacy Protection",
    text: "Adheres to African ethical standards, prioritizes user data privacy, and ensures compliance with local regulations for secure and responsible AI use.",
  },
  {
    icon: LuBriefcase,
    title: "Business, Agriculture, and Entrepreneurship Support",
    text: "Provides tailored advice for local businesses, entrepreneurship, and agriculture, covering financial literacy, investment, and market opportunities.",
  },
  {
    icon: LuFileQuestion,
    title: "Problem Solving and Social Awareness",
    text: "Suggests solutions for regional issues like sustainable farming, healthcare, and wildlife conservation, while being aware of local socioeconomic and political contexts.",
  },
  {
    icon: LuGitFork,
    title: "Content and Platform Integration",
    text: "Promotes African literature, arts, and heritage, integrates with local services like e-commerce and mobile money, and ensures seamless use even with low connectivity.",
  },
];

export default Features;
