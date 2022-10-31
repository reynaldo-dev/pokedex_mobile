import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './src/views/HomeScreen';
import PokemonDetails from './src/views/PokemonDetails';
import { StatusBar } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { RootStackParamList } from './navigatortypes';
import { SafeAreaView } from 'react-native-safe-area-context';

const RootStack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (

    <TailwindProvider>
      <NavigationContainer>

        <StatusBar backgroundColor='#f1f5f9' />
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, animation: "slide_from_right" }} />
          <RootStack.Screen name="Details" component={PokemonDetails} options={{ headerShown: false, animation: "slide_from_right" }} />
        </RootStack.Navigator>

      </NavigationContainer>
    </TailwindProvider>
  );
}

