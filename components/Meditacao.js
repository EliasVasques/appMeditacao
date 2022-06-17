import { StyleSheet, Text, View, Link } from 'react-native';


export default function Meditacao(props) {
    const irParaTimer = () =>  props.navigation.navigate('temporizador', { nome: props.nome })

    return <View style={styles.songContainer}>
        <Text 
            onPress={irParaTimer}>
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
