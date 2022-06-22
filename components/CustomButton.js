import { StyleSheet, Text, View, Image } from 'react-native';


export default function CustomButton({ onClick, nome}) {
    return <View style={styles.songContainer}>
        <Text
            onPress={onClick}>
            {nome}
        </Text>
        <Image
            style={{ width: 50, height: 50 }}
            source={require('../images/proximo.png')}
        />
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
