import React from "react";
import { useTheme, View, Image } from "@aws-amplify/ui-react";

const Header = () => {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large} width='50%' margin='0 auto'>
        <Image
          alt="Amplify logo"
          src="https://cdn-icons.flaticon.com/png/512/686/premium/686112.png?token=exp=1652808324~hmac=d620f00408ce660d6d7d0ed5a4965db3"
        />
      </View>
    );
};

export default Header;
