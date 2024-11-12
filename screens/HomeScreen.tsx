import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles/home.style';
import { Ionicons, Fontisto } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}> Sri Lanka</Text>
          <View style={styles.cart}>
            <View style={styles.carCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleBold}>Find The Most </Text>
        <Text style={styles.titleGray}>Luxurious Furniture </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
