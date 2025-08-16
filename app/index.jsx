import { Platform, StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function app() {
  return (
    <SafeAreaView className='bg-white min-h-full'>
      <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({})