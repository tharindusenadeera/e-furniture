import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import styles from './styles/home.style';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}> Sri Lanka</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
