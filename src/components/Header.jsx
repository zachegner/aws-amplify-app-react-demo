import React from "react";
import { useTheme, View, Image } from "@aws-amplify/ui-react";

const Header = () => {
    const { tokens } = useTheme();

    return (
      <View padding={tokens.space.large} width='350px'  display='flex' gap='20px' >
        <Image
          className="note-icon"
          alt="Note Keeper Icon"
          src="https://cdn-icons.flaticon.com/png/512/686/premium/686112.png?token=exp=1652808324~hmac=d620f00408ce660d6d7d0ed5a4965db3"
        />
        <h1 className='title'>Note Keeper</h1>
      </View>
    );
};

export default Header;
