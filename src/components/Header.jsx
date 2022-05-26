import React from "react";
import { useTheme, View } from "@aws-amplify/ui-react";

const Header = () => {
  const { tokens } = useTheme();

  return (
    <View padding={tokens.space.large} width='350px' display='flex' gap='20px' >
      <h1 className='title'>Note Keeper</h1>
    </View>
  );
};

export default Header;
