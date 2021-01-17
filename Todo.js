import React, {useState} from 'react';
import styles from './style';
import {FlatList, Text, View,Alert, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './component/Header';
import TodoItem from './component/TodoItem';
import AddTodo from './component/addTodo';

 function Todo() {
     const [todos, setTodos] = useState([
         {text:'buy a Coffee', key :1},
         {text:'Create an App', key :2},
         {text:'play on the Switch', key :3},
         
     ]);
     const pressHandler = (key) => {
         setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key)
         })
     };
     const submitHandler = (text) => {

        if(text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    {text: text,key:Math.random().toString()},
                    ...prevTodos
                ]
             })
        }else {
            Alert.alert('OOPs', 'Todos must be over 3 chars long', [
                {text: 'understood', onPress: () => console.log('alert closed')}
            ]);

        }


     }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed Keyboard')
        }}>
            <View style={styles.container}>
                <Header/>
                <View style={styles.content}>
                    <AddTodo submitHandler={submitHandler}/>
                    <View style={styles.list}>
                        <FlatList
                        data={todos}
                        renderItem={({item}) =>(
                        <TodoItem item={item} pressHandler={pressHandler}/>
                        )}
                        
                        />
                        
                    </View>
                    
                </View>
            
            </View>
        </TouchableWithoutFeedback>

    )
}
export default Todo