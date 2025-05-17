import ScreenWrapper from "@/components/ScreenWrapper";
import Typography from "@/components/Typography";
import { colors, spacingX, spacingY } from "@/constants/tema";
import { scalaVerticale } from "@/utils/stile";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const Welcome = () => {
    return (
        <ScreenWrapper>
            <View style={styles.container}>
                {/* bottone di login e immagine */}
                <View>
                    <TouchableOpacity style={styles.loginButton}>
                        <Typography fontWeight={"500"}>Registrati</Typography>
                    </TouchableOpacity>
                    
                    <Image source={require('../../assets/images/welcome.png')} style={styles.welcomeImage} resizeMode="contain"/>
                </View>

                {/* footer */}
                <View style={styles.footer}>
                    <View style={{alignItems: 'center'}}>
                        <Typography size={25} fontWeight={"800"}>Tieni sempre sotto controllo</Typography>
                        <Typography size={25} fontWeight={"800"}>le tue finanze</Typography>
                    </View>
                    <View style={{alignItems: 'center', gap: 2}}>
                        <Typography size={17} color={colors.textLight}>Monitora sempre le tue finanze</Typography>
                        <Typography size={17} color={colors.textLight}>per un futuro migliore</Typography>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingTop: spacingY._7,
    },

    welcomeImage: {
        width: "100%",
        height: scalaVerticale(300),
        alignSelf: "center",
        marginTop: scalaVerticale(100),
    },

    loginButton: {
        alignSelf: "flex-end",
        marginRight: spacingX._20,
    },

    footer: {
        backgroundColor: colors.neutral900,
        alignItems: "center",
        paddingTop: scalaVerticale(30),
        paddingBottom: scalaVerticale(45),
        gap: spacingY._20,
        shadowColor: "white",
        shadowOffset: {width: 0, height: -10},
        elevation: 10,
        shadowRadius: 25,
        shadowOpacity: 0.15,
    },

    buttonContainer: {
        width: "100%",
        paddingHorizontal: spacingX._25,
    }
})