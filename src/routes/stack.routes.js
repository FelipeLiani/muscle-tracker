import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './tab.routes';
import Settings from '../screens/settings';
import GoPro from '../screens/goPro';



const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="menu" component={TabRoutes} />
      <Stack.Screen name="settings" component={Settings} />
      <Stack.Screen name="go pro!" component={GoPro} />
    </Stack.Navigator>
  );
}
