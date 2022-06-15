import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Button from '../components/Button'

function HomeScreen() {
    return(   
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.trickContainer}>
                <Text style={styles.trick}>BACK FLIP</Text>
            </View>
            <View style={styles.mainButtons}>
                <Button buttonStyle={styles.button} textStyle={styles.buttonText} onPress={myFunction} title="RAILS"/>
                <Button buttonStyle={styles.button} textStyle={styles.buttonText} onPress={myFunction} title="JUMPS"/>
                <Button buttonStyle={styles.button} textStyle={styles.buttonText} onPress={myFunction} title="PIPE"/>
            </View>
            <View style={styles.optionsButtonContainer}>
                <Button butonStyle={styles.button} textStyle={styles.buttonText} onPress={myFunction} title="OPTIONS"/>
            </View>
        </View>
    );
}

function myFunction(){
    Alert.alert('Right button pressed')
}

export default HomeScreen;

const styles = StyleSheet.create({
    trick: {
        fontSize: 70,
        fontWeight: 'bold',
        textAlign: "center"
    },
    trickContainer: {
        width: 300,
        height: 50,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    mainButtons: {
        marginTop:10,
        marginBottom:10
    },
    optionsButtonContainer: {
        marginTop: 10,
        marginBottom: 30
    },
    button: {
        marginTop: 10,
        backgroundColor: "black",
        color: "white",
        width: 200,
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