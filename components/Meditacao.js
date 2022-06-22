import { StyleSheet, Text, Button, View } from "react-native";

export default function Meditacao({ nome, navigation }) {
  const irParaTimer = () => {
    navigation.navigate("temporizador", { nome: nome });
  };

  return (
    <View style={styles.songContainer}>
      <Button onPress={irParaTimer} title={nome} />
    </View>
  );
}

const styles = StyleSheet.create({
  songContainer: {
    backgroundColor: "rgb(33, 150, 243)",
    textAlign: "center",
    border: "1px #000",
    margin: 8,
    borderRadius: 4,
    padding: 8,
    paddingHorizontal: 24,
    boxShadow: "0px 2px 5px #888888",
  },
});
