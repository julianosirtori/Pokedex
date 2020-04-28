import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Evolution from '../pages/Evolution';
import Stats from '../pages/Stats';
import About from '../pages/About';

const Tab = createBottomTabNavigator();

const options = {
  tabBarVisible: false,
};

const routes = () => (
  <Tab.Navigator>
    <Tab.Screen name="About" component={About} options={options} />
    <Tab.Screen name="Stats" component={Stats} options={options} />
    <Tab.Screen name="Evolution" component={Evolution} options={options} />
  </Tab.Navigator>
);

export default routes;
