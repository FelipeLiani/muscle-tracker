import * as React from 'react';
import { NavigationContext } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";

export default function NavigationRouter() {

  return (
    <NavigationContainer theme={theme}>
      <StackRoutes />
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
