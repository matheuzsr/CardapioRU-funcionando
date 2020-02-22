import React from 'react';
import {StatusBar, YellowBox,} from 'react-native'; 

import Routes from './src/routes';

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
      <Routes/>
    </>
  );
}

