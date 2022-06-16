import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Meditacao from '../components/Meditacao';


export default function Inicial({ navigation }) {
  const meditacoes = ['meditacao1', 'meditacao2', 'meditacao3']


  return (
    <View style={styles.container} >
      <Text>Meditação App!</Text>
      <StatusBar style="auto" />

      {
        meditacoes.map(meditacao => 
          <Meditacao 
            nome={meditacao} 
            key={meditacao} 
            navigation={navigation} 
          />)
      }


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

