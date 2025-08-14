import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Create = ({ data ,setData }) => {
    const [itemName, setItemName] = useState('')
    const [stock, setStock] = useState('')

    const addHandlerItem =()=>{
        let obj = {
            id:Date.now(),
            name:itemName,
            stock:stock,
        }
            setData([...data , obj])
            setItemName('')
            setStock('')
    }

    return (
        <View style={styles.container}>

            <TextInput
                placeholder='Enter an Item name'
                placeholderTextColor={'#999'}
                style={styles.inputText}
                value={itemName}
                onChangeText={(item) => setItemName(item)}
            />

            <TextInput
                placeholder='Enter Stock Amount'
                placeholderTextColor={'#999'}
                style={styles.inputText}
                value={stock}
                onChangeText={(item) => setStock(item)}
            />

            <Pressable
                style={styles.btn}
                onPress={()=>addHandlerItem()}
            >
                <Text style={styles.btnText}>ADD ITEM IN STOCK</Text>
            </Pressable>



            {/* list is here */}


            <View className={` flex-row justify-between pt-7 pb-3`}>
                <Text style={styles.text}>All Item in the Stock</Text>
            </View>

            <FlatList
                contentContainerStyle={{ gap: 10 }} // gap is given like this is flatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className={` flex-row justify-between rounded-md  p-3 ${item.stock < 20 ? 'bg-red-300' : 'bg-green-400'}  `}>
                        <Text style={styles.ItemText}>{item.name}</Text>
                        <Text style={styles.ItemText}>{item.stock} {item.unit}</Text>
                        <View style={{flexDirection:'row' ,gap:10}}>
                            <Text style={styles.ItemText}>Edit</Text>
                            <Text style={styles.ItemText}>Delete</Text>
                        </View>
                    </View>
                )}
            />




        </View>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        gap: 10
    },
    text:{
        fontWeight:600,
        fontSize:18
    },
    inputText: {
        width: '100%',
        borderWidth: 1.5,
        borderColor: 'green',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 7
    },
    btn: {
        backgroundColor: '#c084fc',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 15,
    }
})