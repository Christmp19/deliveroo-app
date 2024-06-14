import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useRoute, useNavigation } from '@react-navigation/native'
import Currency from 'react-currency-formatter'



const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  let defaultColor = '#00CCBB';


  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className='mx-5 bg-[#00CCBB] p-4 rounded flex-row items-center space-x-1'>
        <Text className="text-lg text-white font-extrabold bg-[#01A296] py-1 px-3">
          {items.length}
        </Text>
        <Text className="flex-1 text-lg text-white font-extrabold text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="eur" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon