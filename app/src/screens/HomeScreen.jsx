import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LowStock from './LowStock'
import Create from './Create'
import AllItem from './AllItem'


const HomeScreen = () => {

  const [myView, setMyView] = useState(0)
  const [data , setData ] = useState([
    { id: 1, name: "Apple", stock: '5', unit: 'kg' },
  { id: 2, name: "Apple", stock: '15', unit: 'kg' },
  { id: 3, name: "Apple", stock: '25', unit: 'kg' },
  { id: 4, name: "Apple", stock: '5', unit: 'kg' },
  { id: 5, name: "Apple", stock: '10', unit: 'kg' },
  { id: 6, name: "Apple", stock: '12', unit: 'kg' },
  { id: 7, name: "Apple", stock: '8', unit: 'kg' },
  { id: 8, name: "Apple", stock: '18', unit: 'kg' },
  { id: 9, name: "Apple", stock: '22', unit: 'kg' },
  { id: 10, name: "Apple", stock: '6', unit: 'kg' },
  { id: 11, name: "Apple", stock: '14', unit: 'kg' },
  { id: 12, name: "Apple", stock: '9', unit: 'kg' },
  { id: 13, name: "Apple", stock: '20', unit: 'kg' },
  { id: 14, name: "Apple", stock: '3', unit: 'kg' },
  { id: 15, name: "Apple", stock: '17', unit: 'kg' },
  { id: 16, name: "Apple", stock: '11', unit: 'kg' },
  { id: 17, name: "Apple", stock: '7', unit: 'kg' },
  { id: 18, name: "Apple", stock: '16', unit: 'kg' },
  { id: 19, name: "Apple", stock: '4', unit: 'kg' },
  { id: 20, name: "Apple", stock: '13', unit: 'kg' },
  ])

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