import React from "react";
import { View, Text, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import { GuildIcon } from "../GuildIcon/GuildIcon";

import { 
    GuildContent, 
    GuildStyled, 
    GuildTitle, 
    GuildType 
} from "./Guild.style";

import { theme } from "../../global/styles/theme";

export type GuildProps = {
	id: string;
	name: string;
	icon: string | null;
	owner: boolean;
};

type Props = TouchableOpacityProps & {
	data: GuildProps;
};

export function Guild({data, ...rest}: Props) {
    return (
		<GuildStyled activeOpacity={0.7} {...rest}>
			<GuildIcon />

			<GuildContent>
				<View>
					<GuildTitle>{data.name}</GuildTitle>

					<GuildType>
						{data.owner ? "Administrador" : "Convidado"}
					</GuildType>
				</View>
			</GuildContent>
			
            <Feather name="chevron-right" size={24} color={theme.colors.heading} />
		</GuildStyled>
	);
}
