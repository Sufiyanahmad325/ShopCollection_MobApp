import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LowStock = ({ data }) => {
    return (
        <View style={styles.container}>
            <View className={` flex-row justify-between px-14 pt-6 pb-5`}>
                <Text style={styles.text}>AllItem</Text>
                <Text style={styles.text}>Quality</Text>
            </View>


            <FlatList
                contentContainerStyle={{ gap: 10 }}
                data={data.filter(item => item.unit == "kg" ? item.stock < 20 : item.unit == 'pc' ? item.stock < 30 : item.unit == 'bg' ? item.stock < 5 : item.unit == 'pk' ? item.stock < 20 : false)}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                      className={`
                    flex-row justify-between rounded-md p-3  
                    ${
                        item.unit == 'kg' || item.unit == 'pc' ? item.stock < 30 ? 'bg-red-300':'bg-green-400' 
                         : item.unit == 'bg' ? item.stock < 6 ? 'bg-red-300' : 'bg-green-400'
                         : item.unit == 'pc' ? item.stock < 30 ? 'bg-red-300' : 'bg-green-400' 
                         : item.unit == 'pk' ? item.stock < 20 ? 'bg-red-300' : 'bg-green-400' 
                         : ''
                        }
                        `}
                    >
                        <Text style={styles.ItemText}>{item.name}{item.id}</Text>
                        <Text style={styles.ItemText}>{item.stock} {item.unit}</Text>
                      
                    </View>
                )}
            />

        </View>
    )
}

export default LowStock

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 2,
        minHeight: '88%',
    },
    text: {
        fontWeight: '700',
        fontSize: 17
    },
})