import { AuthProvider } from '@/contexts/authContexts';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from "react-native";

const StackLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="(modals)/profileModal" options={{presentation: 'modal', }}/>
        </Stack>
    )
};

export default function RootLayout(){
    return(
        <AuthProvider>
            <StackLayout />
        </AuthProvider>
    );
};


const syles = StyleSheet.create({})