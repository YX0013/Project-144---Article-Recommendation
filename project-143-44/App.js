import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from './screens/home';
import Popular from './screens/popular';
import Recommendation from './screens/recommendation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

const AppTopNavigation = createMaterialTopTabNavigator({
  RecommendedArticles: {
    screen: Recommendation,
    navigationOptions: {
      tabBarLabel: 'Recommended',
      tabBarOptions: {
        tabStyle: { backgroundColor: '#fff' },
        labelStyle: { color: '#000' },
        indicatorStyle: { backgroundColor: '#000' },
      },
    },
  },
  PopularArticles: {
    screen: Popular,
    navigationOptions: {
      tabBarLabel: 'Popular',
      tabBarOptions: {
        tabStyle: { backgroundColor: '#fff' },
        labelStyle: { color: '#000' },
        indicatorStyle: { backgroundColor: '#000' },
      },
    },
  },
});

const AppStackNavigator = createStackNavigator(
  {
    Home: { screen: Home, navigationOptions: { headerShown: false } },
    AppTopNav: {
      screen: AppTopNavigation,
      navigationOptions: {
        headerBackTitle: null,
        headerTintColor: '#fff',
        headerTitle: 'Recommended Articles',
        headerStyle: { backgroundColor: '#d500f9' },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: RFValue(18),
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppStackNavigator);

export default function App() {
  return <AppContainer />;
}
