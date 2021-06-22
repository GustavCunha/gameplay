import React from "react";
import { ImageStyled } from "./GuildIcon.styles";

export function GuildIcon() {
    const uri = 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg';

    return (
        <ImageStyled
            source={{ uri }}
            resizeMode="cover"
        />
    );
}
