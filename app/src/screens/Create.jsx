import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Create = ({ data, setData }) => {
    const [itemName, setItemName] = useState('')
    const [stock, setStock] = useState('')
    const [isEdit, setIsEdit] = useState(null)



    const addHandlerItem = () => {

        if (isEdit != null) {
            setData(prev => prev.map(item => item.id == isEdit.id ? { ...item, name: itemName, stock: stock } : item))

            setIsEdit(null)
            setItemName('')
            setStock('')
            return
        }

        let obj = {
            id: Date.now(),
            name: itemName,
            stock: stock,
        }
        setData([...data, obj])
        setItemName('')
        setStock('')
    }

    const deleteHandle = (id) => {
        setData(prev => prev.filter(ele => ele.id !== id))
    }


    const editHandle = (item) => {
        setIsEdit(item)
        setItemName(item.name)
        setStock(item.stock)
    }

    useEffect(() => { }, [])


    return (
        <View style={[styles.container , {flex:1}]}>

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
                onPress={() => addHandlerItem()}
            >
                <Text style={styles.btnText}>{isEdit != null ? 'Edit ITEM IN STOCK' : 'ADD ITEM IN STOCK'}</Text>
            </Pressable>



            {/* list is here */}


            <View className={` flex-row justify-between pt-7 pb-3`}>
                <Text style={styles.text}>All Item in the Stock</Text>
            </View>

            <FlatList // yaha pe flex-1 dene se list show q nhi kr rha hai
                contentContainerStyle={{ gap: 10 }} // gap is given like this is flatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className={` flex-row justify-between rounded-md  p-3 ${item.stock < 20 ? 'bg-red-300' : 'bg-green-400'}  `}>
                        <Text style={styles.ItemText}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20, width: '40%' }}>
                            <Text style={styles.ItemText}>{item.stock} {item.unit}</Text>
                            <Pressable onPress={() => editHandle(item)}>
                                <Text style={styles.ItemText}>Edit</Text>
                            </Pressable>
                            <Pressable onPress={() => deleteHandle(item.id)}>
                                <Text style={styles.ItemText}>Delete</Text>
                            </Pressable>
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
        gap: 10,
        minHeight:'90%',
    },
    text: {
        fontWeight: 600,
        fontSize: 18
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