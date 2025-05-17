import { colors } from "@/constants/tema";
import { TypoProps } from "@/types";
import { scalaVerticale } from "@/utils/stile";
import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

const Typography = ({
    size,
    color = colors.text,
    fontWeight = '400',
    children,
    style,
    textProps = {}
}: TypoProps) => {

    const textStyle: TextStyle = {
        fontSize: size? scalaVerticale(size): scalaVerticale(18),
        color,
        fontWeight
    }

    return (
        <Text style={[textStyle, style]} {...textProps}>
            {children}
        </Text>
    )
}

export default Typography

const styles = StyleSheet.create({})