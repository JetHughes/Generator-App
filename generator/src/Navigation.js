import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import FriendsScreen from './screens/FriendsScreen';
import OptionsScreen from './screens/OptionsScreen';

const Tab = createBottomTabNavigator();
function Tabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Friends" component={FriendsScreen} />
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Options" component={OptionsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Tabs;