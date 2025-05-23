import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typography from "@/components/Typography";
import { auth } from "@/config/firebase";
import { useAuth } from "@/contexts/authContexts";
import { signOut } from "firebase/auth";
import React from "react";
import { StyleSheet } from "react-native";

const Home = () => {
    const {user} = useAuth();

    const handleLogout = async ()=>{
        await signOut(auth);
    };
    return(
        <ScreenWrapper>
            <Button onPress={handleLogout}>
                <Typography>Esci</Typography>
            </Button>
        </ScreenWrapper>
    );
};

export default Home;
const styles = StyleSheet.create({});