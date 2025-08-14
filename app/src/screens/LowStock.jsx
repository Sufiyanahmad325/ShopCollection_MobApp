import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LowStock = ({ data }) => {
    return (
        <View>
            <View className={` flex-row justify-between px-14 pt-6 pb-5`}>
                <Text style={styles.text}>AllItem</Text>
                <Text style={styles.text}>Quality</Text>
            </View>


            <FlatList
                contentContainerStyle={{ gap: 10 }}
                data={data.filter(item=> item.stock < 20)}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className={` flex-row justify-between rounded-md px-14 p-3 ${item.stock < 20 ? 'bg-red-300' : 'bg-green-400'}  `}>
                        <Text style={styles.ItemText}>{item.name}</Text>
                        <Text style={styles.ItemText}>{item.stock} {item.unit}</Text>
                    </View>
                )}
            />

        </View>
    )
}

export default LowStock

const styles = StyleSheet.create({
    text: {
        fontWeight: '700',
        fontSize: 17
    },
})