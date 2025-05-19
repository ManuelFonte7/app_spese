import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typography from "@/components/Typography";
import { colors, spacingX, spacingY } from "@/constants/tema";
import { scalaVerticale } from "@/utils/stile";
import { useRouter } from "expo-router";
import * as Icons from 'phosphor-react-native';
import React, { useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const handleSubmit = async () =>{
        if(!emailRef.current || !passwordRef.current){
            Alert.alert('Accesso', "Per favore, completa tutti i campi");
            ReadableByteStreamController;
        }
        console.log('email: ', emailRef.current);
        console.log('password: ', passwordRef.current);
        console.log('Puoi procedere');
    };

    return(
        <ScreenWrapper>
            <View style={styles.container}>
                <BackButton iconSize={28}/>

                <View style={{ gap: 5, marginTop: spacingY._20}}>
                    <Typography size={30} fontWeight={'800'}>Bentornato</Typography>
                </View>

                <View style={styles.form}>
                    <Typography size={16} color={colors.textLighter}>Accedi per tracciare le tue spese</Typography>
                    <Input 
                        onChangeText={value => emailRef.current = value}
                        placeholder="Inserisci la tua e-mail" 
                        icon={<Icons.At size={scalaVerticale(26)} color={colors.neutral300} weight="fill"/>}
                    />
                    <Input 
                        onChangeText={value => passwordRef.current = value}
                        secureTextEntry
                        placeholder="Inserisci la tua password"
                        icon={<Icons.Lock size={scalaVerticale(26)} color={colors.neutral300} weight="fill"/>}
                    />
                </View>

                <Typography size={14} color={colors.text} style={{alignSelf: 'flex-end'}}>Password dimenticata?</Typography>

                <Button loading={isLoading} onPress={handleSubmit}>
                    <Typography fontWeight={'700'} size={21}>Accedi</Typography>
                </Button>

                <View style={styles.footer}>
                    <Typography size={15}>Non hai un account?</Typography>
                    <Pressable onPress={()=>router.push("/(auth)/register")}>
                        <Typography size={15} fontWeight={'700'} color={colors.primary}>Registrati</Typography>
                    </Pressable>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20,
    },

    welcomeText: {
        fontSize: scalaVerticale(20),
        fontWeight: 'bold',
        color: colors.text,
    },

    form: {
        gap: spacingY._20,
    },

    forgotPassword: {
        textAlign: 'right',
        fontWeight: '500',
        color: colors.text,
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },

    footerText: {
        textAlign: 'center',
        color: colors.text,
        fontSize: scalaVerticale(15),
    },
});