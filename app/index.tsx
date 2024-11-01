import { Text, View, StyleSheet } from 'react-native';
import * as React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from '@/navigation/BottomTabNavigation';

const Stack = createNativeStackNavigator();

export default function Index() {
  const [fontLoaded] = useFonts({
    regular: require('../assets/fonts/Poppins-Regular.ttf'),
    light: require('../assets/fonts/Poppins-Light.ttf'),
    medium: require('../assets/fonts/Poppins-Medium.ttf'),
    bold: require('../assets/fonts/Poppins-Bold.ttf'),
    extrabold: require('../assets/fonts/Poppins-ExtraBold.ttf'),
    semiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Bottom Navigation" component={BottomTabNavigation} options={{ headerShown: false }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <BottomTabNavigation />
  );
}

const styleSheet = StyleSheet.create({
  textStyle: {
    fontFamily: 'extrabold',
  },
});
