import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LowStock from './LowStock'
import Create from './Create'
import AllItem from './AllItem'


const HomeScreen = () => {

  const [myView, setMyView] = useState(0)
  const [data, setData] = useState([
    { id: 1, name: "Apple", stock: 5, unit: "kg" },
    { id: 2, name: "Banana", stock: 15, unit: "kg" },
    { id: 3, name: "Orange", stock: 25, unit: "kg" },
    { id: 4, name: "Mango", stock: 5, unit: "kg" },
    { id: 5, name: "Pineapple", stock: 10, unit: "kg" },
    { id: 6, name: "Grapes", stock: 12, unit: "kg" },
    { id: 7, name: "Papaya", stock: 20, unit: "pk" },
    { id: 8, name: "Watermelon", stock: 19, unit: "pk" },
    { id: 9, name: "Peach", stock: 22, unit: "kg" },
    { id: 10, name: "Plum", stock: 6, unit: "kg" },
    { id: 11, name: "Kiwi", stock: 14, unit: "kg" },
    { id: 12, name: "Guava", stock: 9, unit: "kg" },
    { id: 13, name: "Cherry", stock: 7, unit: "bg" },
    { id: 14, name: "Strawberry", stock: 5, unit: "bg" },
    { id: 15, name: "Blueberry", stock: 17, unit: "kg" },
    { id: 16, name: "Pomegranate", stock: 11, unit: "kg" },
    { id: 17, name: "Litchi", stock: 7, unit: "kg" },
    { id: 18, name: "Coconut", stock: 30, unit: "pc" },
    { id: 19, name: "Dragonfruit", stock: 29, unit: "pc" },
    { id: 20, name: "Pear", stock: 13, unit: "kg" }
  ]
  )

  return (
    <View className=' bg-white p-4 h-full  '>
      <Text className='text-[26px]'>Dashboard</Text>

      {/* btns */}
      <View className='w-full h-14 flex-row gap-2 items-center pt-4'>

        <Pressable
          onPress={() => setMyView(0)}
          className={`px-4 py-2 flex justify-center items-center border-2 border-gray-600 rounded-full ${myView == 0 ? 'bg-green-700' : ''}`}
        >

          <Text className={`text-green-700 font-bold text-[14px] ${myView == 0 ? 'text-white' : ''}`}>All items</Text>
        </Pressable>

        <Pressable
          onPress={() => setMyView(1)}
          className={`px-4 py-2 flex justify-center items-center  border-2 border-gray-600 rounded-full ${myView == 1 ? 'bg-green-700' : ''}`}
        >
          <Text className={`text-green-700 font-bold text-[14px] ${myView == 1 ? 'text-white' : ''}`}>Low Stock</Text>
        </Pressable>

        <Pressable
          onPress={() => setMyView(2)}
          className={`px-4 py-2 flex justify-center items-center border-2 border-gray-600 rounded-full ${myView == 2 ? 'bg-green-700' : ''}`}
        >
          <Text className={`text-green-700 font-bold text-[14px] ${myView == 2 ? 'text-white' : ''}`}>Create</Text>
        </Pressable>
      </View>

      {myView === 0 && <AllItem data={data} />}
      {myView === 1 && <LowStock data={data} />}
      {myView === 2 && <Create data={data} setData={setData} />}


    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})