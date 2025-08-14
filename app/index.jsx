import { Platform, StyleSheet, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen'

export default function app() {
  return (
    <SafeAreaView className='bg-white h-[100%]'>
      <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({})