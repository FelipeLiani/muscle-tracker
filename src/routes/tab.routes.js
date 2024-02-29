import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Home from '../screens/home';
import Page from '../screens/page';
import Settings from '../screens/settings';
import Feed from '../screens/feed';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: styles.tabBar, headerShown: false}}>
      <Tab.Screen name="home" component={Home}  options={{tabBarItemStyle: styles.Item}}/>
      <Tab.Screen name="page" component={Page} options={{tabBarItemStyle: styles.Item}}/>
      <Tab.Screen name="settings" component={Settings} options={{tabBarItemStyle: styles.Item}}/>
      <Tab.Screen name="feed" component={Feed} options={{tabBarItemStyle: styles.Item}}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: 'rgb(0, 38, 66)',
    borderRadius: 40
  },
  Item: {
    backgroundColor: 'blue',
    borderRadius: 100,
    maxWidth: 80,
    minHeight: 75,
    margin: 10,
    bottom: 30
  },
})
