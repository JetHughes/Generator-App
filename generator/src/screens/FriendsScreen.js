import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Button from '../components/Button';
import PersonListItem from '../components/PersonListItem';
import Person from '../data/Person';

const friends = [
    new Person("john"), 
    new Person("sally"), 
    new Person("bob")
];

function FriendsScreen() {
    return(   
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.buttonsContainer}>
                <Button buttonStyle={styles.button} textStyle={styles.buttonText} onPress={myFunction} title="SCAN QR"/>
                <Button buttonStyle={styles.button} textStyle={styles.buttonText} onPress={myFunction} title="SHOW QR"/>
            </View>
            <View style={styles.peopleContainer}>
                {friends.slice(0).map((person) => (
                    <View key={person.id}>
                        <PersonListItem name={person.name}/>
                    </View>
                ))}
            </View>
        </View>
    );
}

function myFunction(){
    Alert.alert('Right button pressed')
}

export default FriendsScreen;

const styles = StyleSheet.create({
    peopleContainer: {
        marginTop:8,
        padding: 8,
        flex: 1,
        borderWidth: 1,
        borderColor: 'green',
        width: '100%'
    },
    buttonsContainer: {
        width: '100%',
    },
    button: {
        marginTop: 8,
        marginHorizontal: 8,
        backgroundColor: "black",
        color: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        paddingHorizontal: 40,
        paddingVertical: 8
    },
    buttonText: {  
        color: "white",        
    }
})