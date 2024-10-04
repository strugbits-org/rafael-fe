import React, { ReactNode } from "react";
import { Box } from "../ui/box";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box className=" xl:p-7 p-5 md:p-6  dark:bg-[#292929]  bg-gray-300 rounded-[16px] max-w-full ">
      {children}
    </Box>
  );
};

export default Container;
