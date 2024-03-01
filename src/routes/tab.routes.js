import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Home from '../screens/home';
import Workouts from '../screens/workouts';
import Registers from '../screens/registers';
import User from '../screens/user';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: styles.tabBar, headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen name="home" component={Home}  options={{
        tabBarItemStyle: styles.Item,
        tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size}/>
      }}/>
      <Tab.Screen name="workouts" component={Workouts} options={{
        tabBarItemStyle: styles.Item,
        tabBarIcon: ({color, size}) => <Feather name="clipboard" color={color} size={size}/>
      }}/>
      <Tab.Screen name="social" component={Registers} options={{
        tabBarItemStyle: styles.Item,
        tabBarIcon: ({color, size}) => <Feather name="layers" color={color} size={size}/>
      }}/>
      <Tab.Screen name="user" component={User} options={{
        tabBarItemStyle: styles.Item,
        tabBarIcon: ({color, size}) => <Feather name="user" color={color} size={size}/>
      }}/>
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
    backgroundColor: 'rgb(0, 18, 31)',
    borderRadius: 100,
    elevation: 5, // para dispositivos Android
    shadowColor: 'black', // para dispositivos iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    maxWidth: 80,
    minHeight: 80,
    margin: 10,
    bottom: 30
  },
})
