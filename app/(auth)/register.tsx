import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typography from "@/components/Typography";
import { colors, spacingX, spacingY } from "@/constants/tema";
import { useAuth } from "@/contexts/authContexts";
import { scalaVerticale } from "@/utils/stile";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";

const Register = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const nameRef = useRef("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const {register: registerUser} = useAuth();

    const handleSubmit = async () =>{
        if(!emailRef.current || !passwordRef.current || !nameRef.current){
            Alert.alert('Registrazione', "Per favore, completa tutti i campi");
            ReadableByteStreamController;
        }
        setIsLoading(true);
        const res = await registerUser(emailRef.current, passwordRef.current, nameRef.current);
        setIsLoading(false);
        console.log('register result: ', res);
        if(!res.success){
            Alert.alert('Sign up', res.msg);
        }
    };

    return(
        <ScreenWrapper>
            <View style={styles.container}>
                <BackButton iconSize={28}/>

                <View style={{ gap: 5, marginTop: spacingY._20}}>
                    <Typography size={30} fontWeight={'800'}>Iniziamo!</Typography>
                </View>

                <View style={styles.form}>
                    <Typography size={16} color={colors.textLighter}>Registrati ora per tracciare le tue spese</Typography>
                    <Input 
                        onChangeText={value => nameRef.current = value}
                        placeholder="Inserisci il tuo username" 
                    />
                    <Input 
                        onChangeText={value => emailRef.current = value}
                        placeholder="Inserisci la tua e-mail" 
                    />
                    <Input 
                        onChangeText={value => passwordRef.current = value}
                        secureTextEntry
                        placeholder="Inserisci la tua password"
                    />
                </View>

                <Button loading={isLoading} onPress={handleSubmit}>
                    <Typography fontWeight={'700'} size={21}>Registrati</Typography>
                </Button>

                <View style={styles.footer}>
                    <Typography size={15}>Hai già un account?</Typography>
                    <Pressable onPress={()=>router.push("/(auth)/login")}>
                        <Typography size={15} fontWeight={'700'} color={colors.primary}>Accedi</Typography>
                    </Pressable>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Register;

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