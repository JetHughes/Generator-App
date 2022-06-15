import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={props.buttonStyle}>
                <Text style={props.textStyle}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button