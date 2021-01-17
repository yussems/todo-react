import React  from 'react';
import {StyleSheet, Text, TouchableOpacity, View, } from 'react-native';



function TodoItem({item, pressHandler}) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            
                
             <Text style={styles.item}>{item.text}</Text>
            
            
        </TouchableOpacity>
    )
} 



const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'solid',
        backgroundColor:'grey',
        borderRadius:10,        
    }
});
export default TodoItem 