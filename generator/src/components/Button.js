import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button


const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        backgroundColor: "black",
        color: "white",
        width: 100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        paddingHorizontal: 40,
        paddingVertical: 10
    },
    buttonText: {  
        color: "white",        
    }
})