import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Icon, Avatar } from 'react-native-elements'
import FeedStack from './components/FeedTab'
import LikedStack from './components/PlaylistTab'
import SearchStack from './components/ExploreTab'
import ProfileStack from './components/ProfileStack';

class EmptyScreen extends Component {
  render()
  {
    return null
  }
}

export default createBottomTabNavigator(
  {
  Feed: FeedStack,
  Liked: LikedStack,
  Search: SearchStack,
  Profile: ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Feed') {
          return <Icon name='ios-home' type='ionicon' color={tintColor}/>;
        } 
        else if (routeName === 'Liked') {
          return <Icon name='ios-albums' type='ionicon' color={tintColor}/>;
        }
        else if (routeName === 'Search') {
          return <Icon name='ios-search' type='ionicon' color={tintColor}/>;
        }
        if (routeName === 'Profile') {
          return <Avatar rounded 
            source={require('./assets/ankit.jpg')}
            size="small"/>
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false
    },
  }
)