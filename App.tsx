import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from '@/navigation/BottomTabNavigation';
import { CartScreen } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bottom Navigation" component={BottomTabNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
