import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BaseStats = ({ data }) => {
    return (
        <View className='p-10'>

            {
                data?.stats.map((stats) => (
                    <View key={stats?.stat?.name} className='flex-row mt-3  justify-between p-2'>
                        <Text className='text-gray-500 font-regular text-sm'>{stats?.stat?.name.toUpperCase()}</Text>
                        <Text className='text-gray-500 font-semibold text-sm'>{stats?.base_stat}</Text>

                        <View className=' w-1/2 bg-gray-300 justify-center' style={{ height: 5 }}>
                            <View className={` rounded-full ${stats?.base_stat > 50 ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: `${stats?.base_stat}%`, height: 5 }}>
                                <Text>ㅤ</Text>
                            </View>
                        </View>


                    </View>

                ))
            }



        </View>
    );
}

const styles = StyleSheet.create({})

export default BaseStats;
