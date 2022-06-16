import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';



export default function Temporizador( {route} ) {

  const { nome } = route.params; // pegar parametros

  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);

  const menosUmSegundo = () => {
    setSegundos(segundo => segundo - 1)
  }

  const iniciar = () => {
    setSegundos(minutos * 60)
  }

  const getSegundo = () => {
    return Math.floor(segundos % 60);
  }

  const getMinuto = () => {
    return Math.floor(segundos / 60);
  }

  if (segundos != 0) setTimeout(menosUmSegundo, 1000)

  return (
    <View style={styles.container}>


      <Text>{nome}</Text>

      <p>Quanto minutos?</p>
      <input type="number" onChange={(e) => setMinutos(e.target.value)} />
      <Button
        onPress={iniciar}
        title="Iniciar"
      />

      <Text>Timer: {getMinuto()}:{getSegundo()}</Text>

      <StatusBar style="auto" />
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
