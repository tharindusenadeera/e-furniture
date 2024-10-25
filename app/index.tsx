import { Text, View } from 'react-native';
import * as React from 'react';
import { useFonts } from 'expo-font';

export default function Index() {
  const [fontLoaded] = useFonts({
    regular: require('../assets/fonts/Poppins-Regular.ttf'),
    light: require('../assets/fonts/Poppins-Light.ttf'),
    medium: require('../assets/fonts/Poppins-Medium.ttf'),
    bold: require('../assets/fonts/Poppins-Bold.ttf'),
    extrabold: require('../assets/fonts/Poppins-ExtraBold.ttf'),
    semiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
