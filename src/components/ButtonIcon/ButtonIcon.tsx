import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import DiscordImg from '../../assets/discord.png';
import { 
    ButtonStyled, 
    IconImage, 
    IconWrapper, 
    LabelButton 
} from "./ButtonIcon.styles";

type ButtonIconProps = RectButtonProps &{
    title: string;
}

export function ButtonIcon({title, ...rest} : ButtonIconProps){
    return(
        <ButtonStyled {...rest}>
            <IconWrapper>
                <IconImage source={DiscordImg}/>
            </IconWrapper>

            <LabelButton>
                {title}
            </LabelButton>
        </ButtonStyled>
    )
}