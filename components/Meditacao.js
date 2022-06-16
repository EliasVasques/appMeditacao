import { StyleSheet, Text, View, Link } from 'react-native';


export default function Meditacao(props) {
    const vaiParaMeditacao = () => props.navigation.navigate('temporizador');

    return <View style={styles.songContainer}>
        <Text onPress={ vaiParaMeditacao }>
        {props.nome}
        </Text>
    </View>;
}

const styles = StyleSheet.create({
    songContainer: {
        backgroundColor: '#ccc',
        textAlign: 'center',
        border: '1px solid #000',
        width: '100%',
    },
});