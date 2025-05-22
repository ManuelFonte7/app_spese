import Button from "@/components/Button";
import Typography from "@/components/Typography";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {

    const handleLogout = async ()=>{
        await signOut(auth);
    };
    return(
        <View>
            <Text>Home</Text>
            <Button onPress={handleLogout}>
                <Typography>Esci</Typography>
            </Button>
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({});