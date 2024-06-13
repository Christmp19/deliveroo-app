import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categogies = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
        >
            {/* CategoryCard */}
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 1"
            />
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 2"
            />
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 3"
            />
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 3"
            />
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 3"
            />
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 3"
            />
        </ScrollView>
    )
}

export default Categogies