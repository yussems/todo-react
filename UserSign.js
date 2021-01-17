import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native'
import styles from './style'

 
function UserSign() {
    
    const [name, setName] = useState('Severus Snape')
    const [age, setAge] = useState(38)
    return (
    <View>
      <Text> Enter your nickname</Text>
      <TextInput 
       multiline
       style={styles.input}
       placeholder='Severus Snape'
       onChangeText={(val) => setName(val)}/>
      <Text>his name is {name}</Text>
      <Text> Enter your Age</Text>
      <TextInput
      keyboardType='numeric' 
       style={styles.input}
       placeholder='1993'
       onChangeText={(val) => setAge(val)}/>
      <Text>Age is {age}</Text>
    </View>
    )
}


export default UserSign