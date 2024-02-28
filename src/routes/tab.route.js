import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Page from '../screens/page';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
      />
      <Tab.Screen
        name="page"
        component={Page}
      />

    </Tab.Navigator>
  )

}
