import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const AboutTab = ({ data }) => {
    return (
        <View className='bg-slate-50 flex-1'>
            <View className='flex-1 m-2  p-1 gap-8 m-5 '>
                <Text className=' mx-2 mt-3 text-gray-400 font-bold'>Species  <Text className='text-gray-500 font-semibold'>{data?.species?.name}</Text></Text>
                <Text className=' mx-2 mt-3 text-gray-400 font-bold'>Height  <Text className='text-gray-500 font-semibold'>{data?.height}</Text></Text>
                <Text className=' mx-2 mt-3 text-gray-400 font-bold'>Weight  <Text className='text-gray-500 font-semibold'>{data?.weight}</Text></Text>
                <Text className=' mx-2 mt-3 text-gray-400 font-bold'>Abilities  {data?.abilities?.map((a) => (<Text className='text-gray-500 font-semibold ml-1'>{a.ability?.name}, </Text>))} </Text>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({})

export default AboutTab;
