import ScreenWrapper from "@/components/ScreenWrapper";
import { colors, radius, spacingX, spacingY } from "@/constants/tema";
import { scalaVerticale } from "@/utils/stile";
import React from "react";
import { StyleSheet, Text } from "react-native";

const Profile = () => {
    return(
        <ScreenWrapper>
            <Text>Profile</Text>
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
});