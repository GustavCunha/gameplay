import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import {Fontisto} from "@expo/vector-icons";

import { Background } from "../../components/Background/Background";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { Header } from "../../components/Header/Header";
import { ListHeader } from "../../components/ListHeader/ListHeader";
import { ListDivider } from "../../components/ListDivider/ListDivider";
import { Member } from "../../components/Member/Member";

import BannerImg from "../../assets/banner.png";
import { theme } from "../../global/styles/theme";

import { 
	BannerBackground, 
	BannerContent, 
	Footer, 
	PlayersList, 
	SubTitleBanner, 
	TitleBanner 
} from "./AppointmentDetails.styles";

export function AppointmentDetails() {
    const members = [
		{
			id: "1",
			username: "Gustavo",
			avatar_url: "https://avatars.githubusercontent.com/u/55558998?v=4",
			status: "online",
		},
		{
			id: "2",
			username: "Gustavo",
			avatar_url: "https://avatars.githubusercontent.com/u/55558998?v=4",
			status: "offline",
		},
	];

    return (
		<Background>
			<Header
				title="Detalhes"
				action={
					<BorderlessButton>
						<Fontisto
							name="share"
							size={24}
							color={theme.colors.primary}
						/>
					</BorderlessButton>
				}
			/>

			<BannerBackground source={BannerImg}>
				<BannerContent>
					<TitleBanner>Lendários</TitleBanner>

					<SubTitleBanner>
						É hoje que vamos chegar ao challenger sem perder uma
						partida da md10
					</SubTitleBanner>
				</BannerContent>
			</BannerBackground>

			<ListHeader title="Jogadores" subtitle="Total 3" />

			<PlayersList
				data={members}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Member data={item} />}
				ItemSeparatorComponent={() => <ListDivider />}
			/>

			<Footer>
				<ButtonIcon title="Entrar na partida" />
			</Footer>
		</Background>
	);
}
