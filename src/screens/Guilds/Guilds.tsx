import React from "react";
import { View, Text } from "react-native";
import { Guild, GuildProps } from "../../components/Guild/Guild";
import { ListDivider } from "../../components/ListDivider/ListDivider";

import { 
    GuildsContainer, 
    GuildsList 
} from "./Guilds.styles";

type Props = {
	handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
	const guilds = [
		{
			id: "1",
			name: "Lendários",
			icon: null,
			owner: true,
		},
		{
			id: "2",
			name: "Galera do Game",
			icon: "image.png",
			owner: false,
		},
		{
			id: "3",
			name: "Galera do Game",
			icon: "image.png",
			owner: false,
		},
		{
			id: "4",
			name: "Galera do Game",
			icon: "image.png",
			owner: false,
		},
		{
			id: "5",
			name: "Galera do Game",
			icon: "image.png",
			owner: false,
		},
		{
			id: "6",
			name: "Galera do Game",
			icon: "image.png",
			owner: false,
		},
		{
			id: "7",
			name: "Galera do Game",
			icon: "image.png",
			owner: false,
		},
		{
			id: "8",
			name: "Galera do Game",
			icon: "image.png",
			owner: false,
		},
	];

	return (
		<GuildsContainer>
			<GuildsList
				data={guilds}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Guild
						data={item}
						onPress={() => handleGuildSelect(item)}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <ListDivider isCentered />}
				ListHeaderComponent={() => <ListDivider isCentered />}
				contentContainerStyle={{ paddingBottom: 68, paddingTop: 68 }}
			/>
		</GuildsContainer>
	);
}
