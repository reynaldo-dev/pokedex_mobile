import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IProps {
    children: ReactNode
}
const Maincontainer = ({ children }: IProps) => {
    return (

        <SafeAreaView className=' flex-1 '>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Maincontainer;
