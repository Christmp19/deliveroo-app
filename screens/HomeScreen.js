import { Text, SafeAreaView, View, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
} from 'react-native-heroicons/outline'
import Svg, { Path } from 'react-native-svg';
import Categogies from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';
import Logo from '../assets/icon.png';

const SearchIcon = (props) => (
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
    </Svg>
);

const AdjustmentsIcon = (props) => (
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
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
        />
    </Svg>
);


const HomeScreen = () => {
    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    useEffect(() => {
        sanityClient
            .fetch(`
                    *[_type == "featured"] {
                        ...,
                        restaurants[]->{
                            ...,
                            dishes[]->,
                            }
                        }
                `)
            .then((data) => {
                setFeaturedCategories(data)
            });
    }, []);

    let defaultColor = '#00CCBB';

    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header */}

            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <Image
                    source={Logo}
                    className='h-12 w-12 bg-gray-300 p-4 rounded-full'
                />

                <View className='flex-1'>
                    <Text className='capitalize font-bold text-gray-400 text-sm'>
                        Deliver now
                    </Text>
                    <Text className='capitalize font-bold text-xl'>
                        Current location
                        <ChevronDownIcon size={20} color={defaultColor} />
                    </Text>
                </View>

                <UserIcon size={35} color={defaultColor} />
            </View>

            {/* Search */}
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
                    <SearchIcon width={20} height={20} stroke='gray' />
                    <TextInput
                        placeholder='Restaurants and cuisines'
                        keyboardType='default'
                        className='flex-1 bg-transparent'
                    />
                </View>
                <AdjustmentsIcon width={24} height={24} stroke={defaultColor} />
            </View>

            {/* Body */}
            <ScrollView
                className='bg-gray-100'
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                {/* Categories */}
                <Categogies />

                {/* Featured */}

                {featuredCategories?.map((category) => (
                    <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen