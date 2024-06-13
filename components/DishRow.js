import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const DishRow = ({
    id,
    name,
    description,
    price,
    image
}) => {
    return (
        <TouchableOpacity>
            <View>
                <Text className='text-lg mb-1'>{name}</Text>
                <Text className='text-gray-400'>{description}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DishRow