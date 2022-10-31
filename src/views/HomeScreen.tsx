import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Maincontainer from './Maincontainer';
import { HomeProps } from '../../navigatortypes';
import PokemonCard from '../components/PokemonCard';
import { usePokemons } from '../utils/usePokemons';

const HomeScreen = ({ route, navigation }: HomeProps) => {
    const { data, isLoading } = usePokemons()



    return (

        <Maincontainer>
            {
                isLoading ? <ActivityIndicator color='red' size='large' />
                    :
                    <ScrollView className=''>
                        <View className=' justify-center items-center'>
                            {
                                data.length > 0 &&
                                data.map((pokemon) => (
                                    <PokemonCard pokemon={pokemon} key={pokemon?.name} />
                                ))
                            }
                        </View>
                    </ScrollView>
            }
        </Maincontainer>

    );
}


export default HomeScreen;

