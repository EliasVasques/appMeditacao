import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, Image } from 'react-native';
import { useState, useEffect } from 'react';

export default function Temporizador({ route }) {

  const { nome } = route.params; // pegar parametros

  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [imagem, setImagem] = useState(require('../images/background1.jpg'));

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

  const imagemAnteriorBotao = () => {
    if(imagem === require('../images/background1.jpg')) setImagem(require('../images/background3.jpg'));

    else if(imagem === require('../images/background2.jpg')) setImagem(require('../images/background1.jpg'));
    
    else if(imagem === require('../images/background3.jpg')) setImagem(require('../images/background2.jpg'));
  }

  const proximaImagemBotao = () => {
    if(imagem === require('../images/background1.jpg')) setImagem(require('../images/background2.jpg'));

    else if(imagem === require('../images/background2.jpg')) setImagem(require('../images/background3.jpg'));
    
    else if(imagem === require('../images/background3.jpg')) setImagem(require('../images/background1.jpg'));
  }

  return (
    <View style={styles.container}>

      <ImageBackground
        source={imagem}
        resizeMode="cover"
        style={styles.image}>

        <Button
          title={<Image
            style={{ width: 50, height: 50 }}
            source={require('../images/anterior.png')}
          />}
          onPress={imagemAnteriorBotao}
          >
        </Button>
        <Button
          title={<Image
            style={{ width: 50, height: 50 }}
            source={require('../images/proximo.png')}
          />}
          onPress={proximaImagemBotao}
          >
        </Button>

        <Text>{nome}</Text>

        <p>Quanto minutos?</p>
        <input type="number" onChange={(e) => setMinutos(e.target.value)} />
        <Button
          onPress={iniciar}
          title="Iniciar"
        />

        <Text>Timer: {getMinuto()}:{getSegundo()}</Text>

        <StatusBar style="auto" />

      </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
