import { StargateColors } from "#/src/utils/Colors";
import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

const Functions = () => {
  const GridItemStyles = {
    color: "white",
    rounded: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    w: "100%",
    h: "100%",
    minH: {
      base: "150px",
      md: "300px",
    },
    transition: "all 0.25s ease",
    _hover: {
      shadow: "md",
    },
  };

  return (
    <Flex
      id="functions"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      px={2}
      maxW={1200}
      mx={"auto"}
    >
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={4}
        w={"100%"}
      >
        <GridItem
          colSpan={2}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url(http://localhost:3000/r.jpg)"}
          bgColor={StargateColors.lightGrey}
          bgSize={"cover"} /* Changed bgSize to cover */
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
        ></GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url(http://localhost:3000/a.jpg)"}
          bgSize={"cover"} /* Changed bgSize to cover */
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
        ></GridItem>
        <GridItem
          colSpan={1}
          rowSpan={{
            base: 1,
            md: 2,
          }}
          {...GridItemStyles}
          bgImage={"url(http://localhost:3000/sells.jpg)"}
          bgSize={"cover"} /* Changed bgSize to cover */
          bgRepeat={"no-repeat"}
          bgPosition={"bottom"}
          bgColor={"#282c34"}
        ></GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url(http://localhost:3000/education.jpg)"}
          bgSize={"cover"} /* Changed bgSize to cover */
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          bgColor={"#70115C"}
        ></GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url(http://localhost:3000/Agric.jpg)"}
          bgSize={"cover"} /* Changed bgSize to cover */
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          bgColor={"#262626"}
        ></GridItem>
        <GridItem
          colSpan={2}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url(http://localhost:3000/culture.jpg)"}
          bgSize={"cover"} /* Changed bgSize to cover */
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          bgColor={StargateColors.lightGrey}
        ></GridItem>
      </Grid>
    </Flex>
  );
};

export default Functions;
