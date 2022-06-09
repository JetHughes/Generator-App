import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeStack from './src/Navigation'

function App() {
    return (
        <HomeStack/>
    );
}

export default App;