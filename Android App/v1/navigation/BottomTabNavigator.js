import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {StyleSheet} from 'react-native';

import TabBarIcon from '../components/TabBarIcon';
import Movies from '../screens/movie';
import Tvshow from '../screens/tvshow';
import User from '../screens/user';
import Home from '../screens/home';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} style={styles.container} activeBackgroundcolor='black'>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'HOME',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Movies"
        component={Movies}
        options={{
          title: 'MOVIES',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-videocam" />,
        }}
      />
      <BottomTab.Screen
        name="TV SHOW"
        component={Tvshow}
        options={{
          title: 'TV SHOWS',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-desktop" />,
        }}
      />
      <BottomTab.Screen
        name="Users"
        component={User}
        options={{
          title: 'USER',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'MOVIE APP';
    case 'Movies':
      return 'MOVIE APP';
    case 'TV SHOW':
      return 'MOVIE APP';
    case 'USER':
      return 'MOVIE APP';

  }
}
const styles = StyleSheet.create({
  container:{
  }
})