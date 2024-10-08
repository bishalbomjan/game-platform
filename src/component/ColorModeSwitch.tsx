import { Switch, HStack, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        ></Switch>
        <Text>Dark Mode</Text>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
