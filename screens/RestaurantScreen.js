import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity';
import Svg, { Path } from 'react-native-svg';
import { ArrowLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    let defaultColor = '#00CCBB';

    const LocationMarkerIcon = (props) => (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
            {...props}
        >
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
        </Svg>
    );


    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
        },
    } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View className="relative">
                    <Image
                        source={{
                            uri: urlFor(imgUrl).url()
                        }}
                        className="w-full h-56 bg-gray-300 p-4"
                    />
                    <TouchableOpacity
                        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                        onPress={() => navigation.goBack()}
                    >
                        <ArrowLeftIcon size={22} color={defaultColor} />
                    </TouchableOpacity>
                </View>

                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">
                            {title}
                        </Text>
                        <View className="flex-row space-x-2 my-1">

                            <View className="flex-row items-center space-x-1">
                                <StarIcon size={22} color='green' opacity={0.5} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-green-500">{rating}</Text> . {genre}
                                </Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <LocationMarkerIcon width={22} height={22} stroke='gray' opacity={0.4} />
                                <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                            </View>
                        </View>

                        <Text className="text-xs text-gray-500 mt-2 mb-4">
                            {short_description}
                        </Text>
                    </View>

                    <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                        <QuestionMarkCircleIcon size={20} color='gray' opacity={0.6} />
                        <Text className="pl-2 flex-1 font-boldtext-md">
                            Have a food allergy?
                        </Text>
                        <ChevronRightIcon color={defaultColor} />
                    </TouchableOpacity>
                </View>

                <View className="pb-36">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">
                        Menu
                    </Text>

                    {/* DishRow */}
                    {dishes.map(dish => (
                        <DishRow
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            image={dish.image}
                        />
                    ))}
                </View>
            </ScrollView>
        </>
    )
}


export default RestaurantScreen