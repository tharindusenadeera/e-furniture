import { Stack } from 'expo-router';
import * as React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
