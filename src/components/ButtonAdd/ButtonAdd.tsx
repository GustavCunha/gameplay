import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { theme } from "../../global/styles/theme"; 

import { 
    ButtonStyled,
} from "./ButtonAdd.styles";

export function ButtonAdd({ ...rest} : RectButtonProps){
    return(
        <ButtonStyled {...rest}>
            <MaterialCommunityIcons 
                name="plus" 
                color={theme.colors.heading}
                size={24}
            />
        </ButtonStyled>
    )
}