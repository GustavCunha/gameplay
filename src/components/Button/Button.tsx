import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { 
    ButtonStyled, 
    LabelButton 
} from "./Button.styles";

type ButtonProps = RectButtonProps &{
    title: string;
}

export function Button({title, ...rest} : ButtonProps){
    return(
        <ButtonStyled {...rest}>
            <LabelButton>
                {title}
            </LabelButton>
        </ButtonStyled>
    )
}