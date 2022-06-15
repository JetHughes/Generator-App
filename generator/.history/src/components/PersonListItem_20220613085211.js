import React from 'react';
import { Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const PersonListItem = (props) => {
    return(
        <View style={{height: 48, padding: 12, borderWidth: 1}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{flex:1}}>{props.name}</Text>
                <View>
                    <MaterialCommunityIcons name="dots-vertical" color={"black"} size={24}/>
                </View>                            
            </View>
        </View>
    )
}

export default PersonListItem