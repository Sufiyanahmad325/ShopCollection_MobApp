import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LowStock from './LowStock'
import Create from './Create'
import AllItem from './AllItem'


const HomeScreen = () => {

  const [myView, setMyView] = useState(0)
  const [data , setData ] = useState([
    { id: 1, name: "Apple", stock: 5, unit: 'kg' },
    { id: 2, name: "Apple", stock: 15, unit: 'kg' },
    { id: 3, name: "Apple", stock: 25, unit: 'kg' },
    { id: 4, name: "Apple", stock: 5, unit: 'kg' },
    { id: 5, name: "Apple", stock: 10, unit: 'kg' },
  ])

  return (
    <View className=' bg-white p-4  '>
      <Text className='text-[26px]'>Dashboard</Text>

      {/* btns */}
      <View className='w-full flex-row gap-4 justify-center pt-4'>

        <Pressable
          onPress={() => setMyView(0)}
          className={`px-6 py-3 border-2 border-gray-600 rounded-full ${myView == 0 ? 'bg-green-700' : ''}`}
        >

          <Text className={`text-green-700 font-bold text-[16px] ${myView == 0 ? 'text-white' : ''}`}>All items</Text>
        </Pressable>

        <Pressable
          onPress={() => setMyView(1)}
          className={`px-6 py-3 border-2 border-gray-600 rounded-full ${myView == 1 ? 'bg-green-700' : ''}`}
        >
          <Text className={`text-green-700 font-bold text-[16px] ${myView == 1 ? 'text-white' : ''}`}>Low Stock</Text>
        </Pressable>

        <Pressable
          onPress={() => setMyView(2)}
          className={`px-6 py-3 border-2 border-gray-600 rounded-full ${myView == 2 ? 'bg-green-700' : ''}`}
        >
          <Text className={`text-green-700 font-bold text-[16px] ${myView == 2 ? 'text-white' : ''}`}>Create</Text>
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