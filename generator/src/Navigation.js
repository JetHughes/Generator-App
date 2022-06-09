import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import FriendsScreen from './screens/FriendsScreen';
import ScheduleScreen from './screens/ScheduleScreen';

const Tab = createBottomTabNavigator();
function Tabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false                    
                }}
                initialRouteName="Home"
            >
                <Tab.Screen name="Friends" component={FriendsScreen} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="account" color={color} size={size}/>)}} />
                <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home" color={color} size={size}/>)}}/>
                <Tab.Screen name="Schedule" component={ScheduleScreen} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="clock" color={color} size={size}/>)}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Tabs;