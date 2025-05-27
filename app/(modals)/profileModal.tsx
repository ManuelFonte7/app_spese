import ScreenWrapper from '@/components/ScreenWrapper';
import { colors, spacingX, spacingY } from '@/constants/tema';
import { scala, scalaVerticale } from '@/utils/stile';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ProfileModal = () => {
    return(
        <ScreenWrapper>
            <Text>ProfileModal</Text>
        </ScreenWrapper>
    )
}

export default ProfileModal;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: spacingY._20,
        paddingVertical: spacingY._30
    },
    
    footer:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: spacingX._20,
        gap: scala(12),
        paddingTop: spacingY._15,
        borderTopColor: colors.neutral700,
        marginBottom: spacingY._5,
        borderTopWidth: 1
    },
    
    form: {
        gap: spacingY._30,
        marginTop: spacingY._15
    },
    
    avatarContainer:{
        position: 'relative',
        alignSelf: 'center'
    },
    
    avatar:{
        alignSelf: 'center',
        backgroundColor: colors.neutral300,
        height: scalaVerticale(135),
        width: scalaVerticale(135),
        borderRadius: 200,
        borderWidth: 1,
        borderColor: colors.neutral500,
        //overflow: 'hidden',
        //position: 'relative'
    },
    
    editIcon:{
        position: 'absolute',
        bottom: spacingY._5,
        right: spacingY._7,
        borderRadius: 100,
        backgroundColor: colors.neutral100,
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 4,
        padding: spacingY._10
    },

    inputContainer:{
        gap: spacingY._10
    }
});