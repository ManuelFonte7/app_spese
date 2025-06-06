import CustomTabs from "@/components/CustomTabs";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const _layout = () => {
    return(
        <Tabs tabBar={CustomTabs} screenOptions={{headerShown: false}}>
            <Tabs.Screen name="index" options={{title:"Home"}} />
            <Tabs.Screen name="wallet" options={{title:"Wallet"}}/>
            <Tabs.Screen name="statistics" options={{title:"Stats"}}/>
            <Tabs.Screen name="profile" options={{title:"Profilo"}}/>
        </Tabs>
    );
};

export default _layout;
const styles = StyleSheet.create({});