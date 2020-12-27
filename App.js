import React, { useState } from 'react';
import { Root, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from "./native-base-theme/variables/material";

// Navigator
import Routes from './src/navigator/Routes';

export default function App() {
  
  const [isLogin, setIsLogin] = useState(false)

  return (
    <Root>
      <StyleProvider style={getTheme(material)}>
        <Routes isLogin={isLogin}/>
      </StyleProvider>
    </Root>
  );
}
