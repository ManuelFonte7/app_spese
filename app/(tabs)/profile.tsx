import Header from "@/components/Header";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typography from "@/components/Typography";
import { auth } from "@/config/firebase";
import { colors, radius, spacingX, spacingY } from "@/constants/tema";
import { useAuth } from "@/contexts/authContexts";
import { getProfileImage } from '@/services/ImageService';
import { accountOptionType } from "@/types";
import { scalaVerticale } from "@/utils/stile";
import { Image } from 'expo-image';
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import * as Icons from 'phosphor-react-native';
import React from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
 
const Profile = () => {
    const user = useAuth();
    const router = useRouter();
    const accountOptions : accountOptionType[] = [
        {
            title: "Modifica profilo",
            icon: <Icons.User size={26} color={colors.white} weight="fill" />,
            routeName: '/(modals)/profileModal',
            bgColor: '#6366f1',
        },
        {
            title: "Impostazioni",
            icon: <Icons.GearSix size={26} color={colors.white} weight="fill" />,
            //routeName: '/(modals)/profileModal',
            bgColor: '#059669',
        },
        {
            title: "Privacy policy",
            icon: <Icons.Lock size={26} color={colors.white} weight="fill" />,
            //routeName: '/(modals)/profileModal',
            bgColor: colors.neutral600,
        },
        {
            title: "Logout",
            icon: <Icons.Power size={26} color={colors.white} weight="fill" />,
            //routeName: '/(modals)/profileModal',
            bgColor: '#e11d48',
        }
    ];

    const handleLogout = async ()=>{
            await signOut(auth);
        };

    const showLogoutAlert = ()=> {
        Alert.alert("Conferma", "Sei sicuro di voler effettuare il logout?", [
            {
                text: "Annulla",
                onPress: ()=> console.log("Logout annullato"),
                style: 'cancel'
            },
            {
                text: "Logout",
                onPress: ()=> handleLogout(),
                style: 'destructive'
            }
        ]);
    };

    const handlePress = (item: accountOptionType) => {
        if(item.title == 'Logout'){
            showLogoutAlert();
        }

        if(item.routeName) router.push(item.routeName);
    }

    return(
        <ScreenWrapper>
            <View style={styles.container}>
                <Header title="Profile" style={{marginVertical: spacingY._10}} />
                
                {/* User info */}
                <View style={styles.userInfo}>
                    {/* Avatar */}
                    <View>
                        {/* User image */}
                        <Image source={getProfileImage(user.user?.image)} style={styles.avatar} contentFit="cover" transition={100} />
                    </View>

                    {/* Nome e email */}
                    <View style={styles.nameContainer}>
                        <Typography size={24} fontWeight={"600"} color={colors.neutral100}>{user.user?.name}</Typography>
                        <Typography size={15} color={colors.neutral400}>{user.user?.email}</Typography>
                    </View>
                </View>

                {/* Opzioni account */}
                <View style={styles.accountOptions}>
                    {accountOptions.map((item, index) =>{
                        return(
                            <Animated.View key={index.toString()} entering={FadeInDown.delay(index*50).springify().damping(14)} style={styles.listItem}>
                                <TouchableOpacity style={styles.flexRow} onPress={() => handlePress(item)}>
                                    <View style={[styles.listIcon, {backgroundColor: item?.bgColor}]}>
                                        {item.icon && item.icon}
                                    </View>
                                    <Typography size={16} fontWeight={"500"} style={{flex: 1}}>{item.title}</Typography>
                                    <Icons.CaretRight size={scalaVerticale(20)} weight="bold" color={colors.white}/>
                                </TouchableOpacity>
                            </Animated.View>
                        );
                    })}
                </View>
            </View>
        </ScreenWrapper>
    );
};

export default Profile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: spacingX._20
    },

    userInfo: {
        marginTop: scalaVerticale(30),
        alignItems: "center",
        gap: spacingY._15
    },

    avatarContainer: {
        position: "relative",
        alignSelf: "center"
    },

    avatar: {
        alignSelf: "center",
        backgroundColor: colors.neutral300,
        height: scalaVerticale(135),
        width: scalaVerticale(135),
        borderRadius: 200,
        // overflow: "hidden",
        // position: "relative"
    },
    editIcon: {
        position: "absolute",
        bottom: 5,
        right: 8,
        borderRadius: 50,
        backgroundColor: colors.neutral100,
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 4,
        padding: 5
    },

    nameContainer: {
        gap: scalaVerticale(4),
        alignItems: "center"
    },

    listIcon: {
        height: scalaVerticale(44),
        width: scalaVerticale(44),
        backgroundColor: colors.neutral500,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: radius._15,
        borderCurve: "continuous"
    },
    listItem: {
        marginBottom: scalaVerticale(17)
    },
    accountOptions: {
        marginTop: spacingY._35
    },
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacingX._10
    }
});