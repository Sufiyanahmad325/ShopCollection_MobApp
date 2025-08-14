import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LowStock = ({ data }) => {
    return (
       <View>
         <View className={` flex-row justify-between px-14 pt-6 pb-5`}>
            <Text style={styles.text}>AllItem</Text>
            <Text style={styles.text}>Quality</Text>
        </View>

        

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