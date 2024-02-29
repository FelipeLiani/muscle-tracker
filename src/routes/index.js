import { NavigationContainer } from "@react-navigation/native";
// import { StyleSheet } from "react-native";
import TabRoutes from "./tab.routes";

export default function TabRouter() {
  return (
    <NavigationContainer theme={theme}>
      <TabRoutes />
    </NavigationContainer>
  );
}

 export const theme = {

   colors: {
     background: 'rgb(2, 4, 15)',
     primary: '#E2012A',
     card: 'rgb(255, 255, 255)'
   }
 }
