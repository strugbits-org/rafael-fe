import React, { ReactNode } from "react";
import { Box } from "./box";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box className=" xl:p-7 p-5 md:p-6 bg-secondary-100 rounded-[16px]  ">
      {children}
    </Box>
  );
};

export default Container;
