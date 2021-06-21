import React from "react";
import { TouchableOpacityProps } from "react-native";

import DiscordImg from '../../assets/discord.png';
import { 
    ButtonStyled, 
    IconImage, 
    IconWrapper, 
    LabelButton 
} from "./ButtonIcon.styles";

type ButtonIconProps = TouchableOpacityProps &{
    title: string;
}

export default function ButtonIcon({title, ...rest} : ButtonIconProps){
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