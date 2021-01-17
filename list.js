import React, {useState} from 'react';
import {ScrollView, Text, View, FlatList,TouchableOpacity,  } from 'react-native'
import styles from './style';


function List() {
    const [people, setPeople] = useState([
        {name:'Joe', id:1},
        {name:'Alfred', id:2},
        {name:'Done', id:3},
        {name:'Capita', id:4},
        {name:'Jack', id:5},
        {name:'Hole', id:7},
        {name:'Hole', id:8},
        {name:'Hole', id:9},
        
        
    ]);
    const pressHandler = (id) => {
        console.log(id)
        setPeople((previusPeople) => {
         return   previusPeople.filter((people) => people.id != id )
        })
    }
    
    return (
        
        <View>

            <FlatList 
             numColumns={2}
             keyExtractor={(item) => item.id}
             data={people}
             renderItem={({item}) => (
                 <TouchableOpacity onPress={() =>pressHandler(item.id)}>
                     <Text style={styles.item}>{item.name} </Text>
                 </TouchableOpacity>
                
             )}
            />

            {/* <ScrollView>
                {people.map((item) => {
                    return (
                        <View key={item.key}>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                    )
                })}
            </ScrollView> */}
        </View>
        
    )
}
export default List