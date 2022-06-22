import { useState, useEffect, useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TextInput,
} from "react-native";
import { Audio } from "expo-av";

const meditacoes = {
  meditacao1: {
    imagem: require("../images/background1.jpg"),
    audio: require("../audios/audio1.mp3"),
  },
  meditacao2: {
    imagem: require("../images/background2.jpg"),
    audio: require("../audios/audio2.mp3"),
  },
  meditacao3: {
    imagem: require("../images/background3.jpg"),
    audio: require("../audios/audio3.mp3"),
  },
};
export default function Temporizador({ route }) {
  const { nome } = route.params; // pegar parametros

  const [meditacao, setMeditacao] = useState(nome);
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [imagem, setImagem] = useState(meditacoes[nome].imagem);
  const [audio, setAudio] = useState(meditacoes[nome].audio);
  const [sound, setSound] = useState();
  const [reproduzindo, setReproduzindo] = useState(false);

  const menosUmSegundo = () => {
    setSegundos((segundo) => segundo - 1);
  };

  const parar = () => {
    sound?.unloadAsync();
    setMinutos(0);
    setSegundos(0);
    setReproduzindo(false);
  };

  const iniciar = async () => {
    const segundosTemp = minutos * 60;
    setSegundos(segundosTemp);

    if (segundosTemp !== 0) {
      //await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

      const { sound } = await Audio.Sound.createAsync(audio, {
        shouldPlay: true,
        isLooping: true,
      });
      setSound(sound);
      setReproduzindo(true);
    }
  };

  const fillNumber = (number = 0) => {
    return number.toString().length == 1 ? `0${number}` : number;
  };

  const getMinuto = useMemo(() => {
    return fillNumber(Math.floor(segundos / 60));
  }, [segundos]);

  const getSegundo = useMemo(() => {
    return fillNumber(Math.floor(segundos % 60));
  }, [segundos]);

  const anterior = () => {
    parar();

    if (imagem === require("../images/background1.jpg")) {
      setMeditacao("meditacao3");
    } else if (imagem === require("../images/background2.jpg")) {
      setMeditacao("meditacao1");
    } else if (imagem === require("../images/background3.jpg")) {
      setMeditacao("meditacao2");
    }
  };

  const proximo = () => {
    parar();

    if (imagem === require("../images/background1.jpg")) {
      setMeditacao("meditacao2");
    } else if (imagem === require("../images/background2.jpg")) {
      setMeditacao("meditacao3");
    } else if (imagem === require("../images/background3.jpg")) {
      setMeditacao("meditacao1");
    }
  };

  useEffect(() => {
    let timeoutId = null;
    if (segundos !== 0) {
      timeoutId = setTimeout(menosUmSegundo, 1000);
    } else if (
      parseInt(getMinuto) === 0 &&
      parseInt(getSegundo) === 0 &&
      sound
    ) {
      sound.unloadAsync();
      setReproduzindo(false);
    }

    return timeoutId ? () => clearTimeout(timeoutId) : undefined;
  }, [segundos, minutos]);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    setImagem(meditacoes[meditacao].imagem);
    setAudio(meditacoes[meditacao].audio);
  }, [meditacao]);

  return (
    <View style={styles.container}>
      <ImageBackground source={imagem} resizeMode="cover" style={styles.image}>
        <View style={styles.navigation}>
          <View style={styles.button}>
            <Button title="anterior" onPress={anterior}></Button>
          </View>
          <View style={styles.button}>
            <Button title="próximo" onPress={proximo}></Button>
          </View>
        </View>

        <Text style={styles.text}>{meditacao}</Text>

        <Text style={styles.text}>Quanto minutos?</Text>
        <TextInput
          value={minutos?.toString()}
          onChangeText={(text) => setMinutos(text ? parseFloat(text) : 0)}
          style={styles.input}
        />

        <View style={styles.button}>
          <Button onPress={iniciar} title="Iniciar" disabled={reproduzindo} />
        </View>
        <View style={styles.button}>
          <Button onPress={parar} title="Parar" disabled={!reproduzindo} />
        </View>

        <Text style={styles.text}>
          Timer: {getMinuto}:{getSegundo}
        </Text>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "#fff",
    width: 100,
    alignSelf: "center",
    margin: 4,
    padding: 4,
  },
  button: {
    width: 100,
    alignSelf: "center",
    margin: 4,
  },
  text: {
    alignSelf: "center",
    color: "white",
    textShadow: "2px 2px 2px black",
    fontSize: 16,
    fontWeight: "bold",
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8
  }
});
