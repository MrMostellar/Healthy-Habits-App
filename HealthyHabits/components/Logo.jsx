import { Text, StyleSheet, View } from 'react-native'

export default function Logo() {
    return (
      <View style={styles.container}>
        <Text> LOGO HERE </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
