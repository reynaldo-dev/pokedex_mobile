import React from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView } from 'react-native';
import { stylesBack } from '../../types/colors';



const MovesTab = ({ data }) => {


    return (
        <ScrollView className='m-5 ' horizontal >
            {
                data?.moves.map((move) => (
                    <Text
                        style={{ backgroundColor: `${data?.types?.length > 0 && stylesBack[`${data?.types[0]?.type?.name}`]}` }}
                        className='self-start rounded-lg p-8 m-2 text-white font-bold text-lg' key={move?.move?.name} >{move?.move?.name}</Text>
                ))
            }

        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default MovesTab;
