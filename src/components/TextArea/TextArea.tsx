import React from "react";
import { TextInputProps } from "react-native";
import { TextInputStyled } from "./TextArea.styles";

export function TextArea({...rest}: TextInputProps) {
    return (
        <TextInputStyled 
            {...rest}
            style={{textAlignVertical: 'top'}}
        />
    )
}
