import { Box } from "@chakra-ui/react";
import React from "react";

const FooterBg = () => {
  // Define gradient stops using only green shades from the provided colors.
  const greenShades = `
    #3db34c, #8cc151, #a3dfac, #6cbc7c, #6ccc64, #6ca424, transparent
  `;

  return (
    <Box
      position={"absolute"}
      inset={0}
      zIndex={-2}
      bg={{
        base: `
        radial-gradient(circle at 100% -40%, ${greenShades}), 
        radial-gradient(circle at 50% -60%, ${greenShades}),
        radial-gradient(circle at 0% -40%, ${greenShades}),
        black
        `,
        md: `
        radial-gradient(circle at 100% -50%, ${greenShades}), 
        radial-gradient(circle at 15% -75%, ${greenShades}),
        black
        `,
      }}
    />
  );
};

export default FooterBg;
