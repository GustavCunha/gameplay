import React from "react";

import { 
    ListHeaderContainer, 
    SubTitleListHeader, 
    TitleListHeader 
} from "./ListHeader.styles";

type Props = {
    title: string;
    subtitle: string;
}

export function ListHeader({title, subtitle}: Props) {
    return (
		<ListHeaderContainer>
			<TitleListHeader>
                {title}
            </TitleListHeader>

            <SubTitleListHeader>
                {subtitle}
            </SubTitleListHeader>
		</ListHeaderContainer>
	);
}
