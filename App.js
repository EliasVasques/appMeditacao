import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Link } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Screens from './stack/index';





export default function App() {
  return (
    <NavigationContainer><Screens/></NavigationContainer>
  );
}

