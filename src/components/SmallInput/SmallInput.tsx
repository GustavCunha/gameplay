import React from "react";
import { TextInputProps } from "react-native";
import { TextInputStyled } from "./SmallInput.styles";

export function SmallInput({...rest}: TextInputProps) {
    return (
        <TextInputStyled 
            {...rest}
            keyboardType="numeric"
        />
    )
}
