import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { stylesBack, stylesType } from '../types/colors';
import { usePokemon } from '../utils/usePokemon';
interface IProps {
    pokemon: any,
}
const PokemonCard = ({ pokemon }: IProps) => {
    const navigation = useNavigation()
    const { data, isLoading } = usePokemon(pokemon?.url)



    return (
        <Pressable
            className={` w-[80%] m-4 h-auto p-2  rounded-xl flex-row `}
            style={{ backgroundColor: ` ${data?.types?.length > 0 && stylesBack[`${data?.types[0]?.type?.name}`]}` }}
            onPress={() => navigation.navigate('Details', { data })}
        >
            {/* !main info */}
            <View className=' w-1/2  '>
                <Text className='text-white font-bold m-3 text-lg'>{pokemon?.name}</Text>
                {
                    data?.types?.map(({ type }) => (
                        <Text className=' bg-stone-100/60  m-2 text-center rounded-full w-1/2 text-white p-1' >{type?.name}</Text>
                    ))
                }
            </View>
            {/* image */}
            <View className=' items-end w-1/2  '>
                <Image style={{ width: 200, height: 200 }} source={{ uri: data?.sprites?.front_default }} />
            </View>


        </Pressable>
    );
}

const styles = StyleSheet.create({})

export default PokemonCard;
