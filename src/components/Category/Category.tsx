import React from "react";
import { View, Text } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";

import { 
    CategoryStyled, 
    ContentCategory, 
    Gradient, 
    styles, 
    TitleCategory 
} from "./Category.styles";

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>
    checked?: boolean;
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    ...rest
}: Props) {
    const {secondary50, secondary70} = theme.colors;

	return (
		<CategoryStyled {...rest}>
			<Gradient colors={[secondary50, secondary70]}>
				<ContentCategory style={{ opacity: checked ? 1 : 0.4 }}>
					<View style={checked ? styles.checked : styles.check} />
					<Icon width={48} height={48} />
					<TitleCategory>{title}</TitleCategory>
				</ContentCategory>
			</Gradient>
		</CategoryStyled>
	);
}
