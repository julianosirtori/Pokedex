import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';


import Routes from './routes';

// import { Container } from './styles';

const App = () => (
  <>
    <StatusBar hidden />
    <Routes />
  </>

);
export default App;
