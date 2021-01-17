import React from 'react';
import {View,Text,StyleSheet} from 'react-native'



function Header(){
    return(
        <View style={styles.header} >
            <Text style={styles.title}>My Todo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor:'coral',
    },
    title:{
        fontSize: 25,
        fontWeight:'bold',
        textAlign:'center',
        color:'#fff'
        
    }

})
export default Header