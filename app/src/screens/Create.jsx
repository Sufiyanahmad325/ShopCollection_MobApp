import { Alert, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from "@react-native-picker/picker";

const Create = ({ data, setData }) => {
    const [itemName, setItemName] = useState('')
    const [stock, setStock] = useState('')
    const [isEdit, setIsEdit] = useState(null)
    const [selectOptionValue, setselectOptionValue] = useState('')



    const addHandlerItem = () => {

        if (isEdit != null) {
            if (!itemName.trim() || !stock) {
                Alert.alert('Error', 'Please fill all fields correctly.')
                return
            }
            setData(prev => prev.map(item => item.id == isEdit.id ? { ...item, name: itemName, stock: stock, unit: selectOptionValue } : item))
            setIsEdit(null)
            setItemName('')
            setStock('')
            setselectOptionValue('') // Resetting the select option value after edit
            return
        }

        let obj = {
            id: Date.now(),
            name: itemName,
            stock: Number(stock),
            unit: selectOptionValue || 'kg'
        }

        if (!itemName.trim() || !stock) {
            Alert.alert('Error', 'Please fill all fields correctly.')
            return
        }

        setData([obj, ...data])
        setItemName('')
        setStock('')
        setselectOptionValue('') // Resetting the select option value after adding a new item
    }



    const deleteHandle = (id) => {
        setData(prev => prev.filter(ele => ele.id !== id))
    }


    const editHandle = (item) => {

        if(isEdit?.id == item.id ) {
            setIsEdit(null)
             setIsEdit(null)
             setItemName('')
             setStock()
             setselectOptionValue('')
            return
        }

        // if(isEdit != null){
        //      setIsEdit(null)
        //      setItemName('')
        //      setStock()
        //      setselectOptionValue('')
        //     return
        // }

        setIsEdit(item)
        setItemName(item.name)
        setStock(String(item.stock))
        setselectOptionValue(item.unit)
    }



    return (
        <View style={[styles.container, { flex: 1 }]}>

            {/* =========== From is here ================= */}
            <TextInput
                placeholder='Enter an Item name'
                placeholderTextColor={'#999'}
                style={styles.inputText}
                value={itemName}
                onChangeText={(item) => setItemName(item)}
            />


            <View style={{ gap: 10, width: '100%', flexDirection: 'row' }}>

                <TextInput
                    type='number'
                    placeholder='Unit count'
                    placeholderTextColor={'#999'}
                    style={[styles.inputText, { width: '50%' }]}
                    value={stock}
                    onChangeText={(item) => setStock(item)}
                    keyboardType="numeric"
                />

                {/* // picker ke under ham border nhi de sakte isliye view ke under liya hai */}
                <View style={styles.PickerPrents}>
                    <Picker
                        selectedValue={selectOptionValue}
                        onValueChange={(itemValue) => setselectOptionValue(itemValue)}
                    >
                        <Picker.Item label="Select Unit" value="" />
                        <Picker.Item label="KG" value="kg" />
                        <Picker.Item label="Pack" value="pk" />
                        <Picker.Item label="Peace" value="pc" />
                        <Picker.Item label="BAG" value="bg" />
                    </Picker>
                </View>

            </View>


            <Pressable
                style={styles.btn}
                onPress={() => addHandlerItem()}
            >
                <Text style={styles.btnText}>{isEdit != null ? 'Edit ITEM IN STOCK' : 'ADD ITEM IN STOCK'}</Text>
            </Pressable>



            {/* =============list is here===================== */}


            <View className={` flex-row justify-between pt-7 pb-3`}>
                <Text style={styles.text}>All Item in the Stock</Text>
            </View>

            <FlatList // yaha pe flex-1 dene se list show q nhi kr rha hai
                contentContainerStyle={{ gap: 10 }} // gap is given like this is flatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        className={`
                     flex-row justify-between rounded-md p-3  
                        ${item.unit == 'kg' || item.unit == 'pc' 
                            ? item.stock < 30 ? 'bg-red-300' : 'bg-green-400' 
                          : item.unit == 'bg' 
                            ? item.stock < 6 ? 'bg-red-300' : 'bg-green-400' 
                          : item.unit == 'pc' 
                            ? item.stock < 30 ? 'bg-red-300' : 'bg-green-400' 
                          : item.unit == 'pk' 
                            ? item.stock < 20 ? 'bg-red-300' : 'bg-green-400' 
                          : ''
                            }
                    `}
                    >
                        <Text style={{ width: '45%' }}>{item.name}</Text>

                        <View style={styles.controlBtnParents}>
                            <Text style={{ width: '30%'}}>{item.stock} {item.unit}</Text>

                            <Pressable style={styles.controlBtn} onPress={() => editHandle(item)}>
                                <Text>{isEdit?.id == item.id ? 'cancel' :'Edit' }</Text>
                            </Pressable>

                            <Pressable style={styles.controlBtn} onPress={() => deleteHandle(item.id)}>
                                <Text >Delete</Text>
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
        minHeight: '90%',
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
    },
    PickerPrents: {
        justifyContent: 'center',
        width: '47%',
        borderWidth: 1.5,
        borderColor: 'green',
        borderRadius: 7,
        color: '#000',
        paddingHorizontal: 10,
    },
    controlBtnParents: {
        flexDirection: 'row',
        gap: 13,
        width: '55%'
    },

    controlBtn: {
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 6,
        borderRadius: 5,
        fontWeight: '500'
    }
})