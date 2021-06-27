import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListData from './assets/components/list/index';
import Header from './assets/components/Header/index';
import Item from './assets/components/item/index';


export default function App() {
  return (
    <View style={styles.container}>

      <Header />
      <ListData />

      {/* <Item
        name={'First'}
        tagline={'First Tagline'}
        taglineCTA={'Tagline CTA'}
      /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});