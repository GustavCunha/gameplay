import React from "react";
import { theme } from "../../global/styles/theme";

import { 
    AvatarContainer, 
    AvatarImage
} from "./Avatar.styles";

type ImageProps = {
    url: string;
}

export function Avatar({url} : ImageProps) {
    const {secondary50, secondary70} = theme.colors;

    return (
		<AvatarContainer
            colors={[secondary50, secondary70]}
        >
            <AvatarImage 
                source={{uri: url}}
            />
		</AvatarContainer>
	);
}
