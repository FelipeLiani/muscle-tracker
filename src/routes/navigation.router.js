import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
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
