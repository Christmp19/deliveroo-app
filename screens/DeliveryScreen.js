import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import Svg, { Path } from 'react-native-svg';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const defaultColor = '#00CCBB';

    const XIcon = (props) => (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            />
        </Svg>
    );

    return (
        <View className="flex-1 bg-[#00CCBB]">
            <SafeAreaView className='z-50'>
                <View className='flex-row justify-between items-center p-5'>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <XIcon width={30} height={30} />
                    </TouchableOpacity>
                    <Text className='font-light text-white text-lg'>Order Help</Text>
                </View>

                <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
                    <View className='flex-row justify-between'>
                        <View>
                            <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                            <Text className='text-4xl font-bold'>45-55 Minutes</Text>
                        </View>
                        <Image
                            source={{ uri: 'https://links.papareact.com/fls' }}
                            className='w-20 h-20'
                        />
                    </View>

                    <Progress.Bar size={30} color={defaultColor} indeterminate={true} />

                    <Text className='mt-3 text-gray-500'>
                        Your order at {restaurant.title} is being prepared
                    </Text>
                </View>
            </SafeAreaView>

            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                className='flex-1 -mt-10 z-0'
                mapType='mutedStandard'
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier="origin"
                    pinColor={defaultColor}
                />
            </MapView>

            <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
                <Image
                    source={{ uri: 'https://links.papareact.com/wru' }}
                    className='w-12 h-12 bg-gray-300 p-4 rounded-full ml-5'
                />
                <View className='flex-1'>
                    <Text className='text-lg'>
                        Christie MPASSI
                    </Text>
                    <Text className='text-gray-400'>
                       Your Rider
                    </Text>
                </View>
                    <Text className='text-[#00CCBB] text-lg mr-5 font-bold'>Call</Text>
            </SafeAreaView>
        </View>
    );
};

export default DeliveryScreen;
