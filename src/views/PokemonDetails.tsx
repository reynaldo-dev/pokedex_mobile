import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DetailsProps } from '../../navigatortypes';
import AboutTab from '../components/tabs/AboutTab';
import BaseStats from '../components/tabs/BaseStats';
import EvolutionTab from '../components/tabs/EvolutionTab';
import MovesTab from '../components/tabs/MovesTab';
import { stylesBack } from '../types/colors';
import Maincontainer from './Maincontainer';



const PokemonDetails = ({ route, navigation }: DetailsProps) => {
    const { data } = route.params
    const [index, setIndex] = useState(0)

    const keys = [
        {
            index: 0,
            title: 'About',
            view: <AboutTab data={data} />
        },

        {
            index: 1,
            title: 'Base stats',
            view: <BaseStats data={data} />
        },
        {
            index: 2,
            title: 'Moves',
            view: <MovesTab data={data} />
        },
    ]

    return (

        <Maincontainer>
            <View style={{ backgroundColor: `${data?.types?.length > 0 && stylesBack[`${data?.types[0]?.type?.name}`]}`, height: 'auto' }} >
                <View className='bg-slate-50 h-[45%] -z-20' style={{ backgroundColor: `${data?.types?.length > 0 && stylesBack[`${data?.types[0]?.type?.name}`]}` }}>
                    <View className=' mt-5 justify-around flex-row'>
                        <Text className='text-white font-bold text-3xl'>{route?.params?.data?.name}</Text>
                        <Text className='text-white font-bold text-3xl'>#{route?.params?.data?.id}</Text>
                    </View>

                    <View className='flex-1 items-center justify-items-end w-full  '>
                        <Image className='' style={styles.imagen} source={{ uri: data?.sprites?.front_default }} />
                    </View>
                </View>

                <View className='bg-slate-50 h-[60%]  rounded-t-3xl w-full '>
                    <View className=' mt-2 flex-row justify-around bg-slate-50 rounded-t-3xl'>
                        {
                            keys.map((key) => (
                                <Pressable className='p-2 ' onPress={() => setIndex(key.index)} >
                                    <Text className='text-gray-500'>{key.title}</Text>
                                </Pressable>
                            ))
                        }
                    </View>
                    {
                        keys[index].view
                    }

                </View>
            </View>
        </Maincontainer>

    );
}

const styles = StyleSheet.create({
    imagen: {
        width: 300,
        height: 300,

        elevation: 1,

    }
})

export default PokemonDetails;
