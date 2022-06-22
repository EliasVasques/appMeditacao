import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Meditacao from "../components/Meditacao";

export default function Inicial({ navigation }) {
  const [meditacoes] = useState(["meditacao1", "meditacao2", "meditacao3"]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meditação App!</Text>
      <StatusBar style="auto" />

      {meditacoes.map((meditacao) => (
        <Meditacao nome={meditacao} key={meditacao} navigation={navigation} />
      ))}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(33, 150, 243)',
    marginBottom: 30
  }
});
