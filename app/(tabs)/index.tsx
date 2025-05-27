import ScreenWrapper from "@/components/ScreenWrapper";
import Typography from "@/components/Typography";
import { useAuth } from "@/contexts/authContexts";
import React from "react";
import { StyleSheet } from "react-native";

const Home = () => {
    const {user} = useAuth();

    return(
        <ScreenWrapper>
            <Typography>Home</Typography>
        </ScreenWrapper>
    );
};

export default Home;
const styles = StyleSheet.create({});