import React, { useState } from "react";
import { Platform, ScrollView, View } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";

import { Background } from "../../components/Background/Background";
import { Button } from "../../components/Button/Button";
import { CategorySelect } from "../../components/CategorySelect/CategorySelect";
import { Guilds } from "../Guilds/Guilds";
import { GuildIcon } from "../../components/GuildIcon/GuildIcon";
import { GuildProps } from "../../components/Guild/Guild";
import { Header } from "../../components/Header/Header";
import { ModalView } from "../../components/ModalView/ModalView";
import { SmallInput } from "../../components/SmallInput/SmallInput";
import { TextArea } from "../../components/TextArea/TextArea";

import BannerImg from "../../assets/banner.png";
import { theme } from "../../global/styles/theme";

import { 
	CaracteresLimit, 
	Column, 
	Container, 
	Divider, 
	Field, 
	Footer, 
	Form, 
	ImageView, 
	Label, 
	Select, 
	SelectBody
} from "./AppointmentCreate.styles";

export function AppointmentCreate() {
	const [category, setCategory] = useState('');
	const [openGuildsModa, setOpenGuildsModal] = useState(false);
	const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

	function handleOpenGuilds() {
		setOpenGuildsModal(true);
	}

	function handleCloseGuilds() {
		setOpenGuildsModal(false);
	}

	function handleGuildSelect(guildSelect: GuildProps) {
		setGuild(guildSelect);
		setOpenGuildsModal(false);
	}

	function handleCategorySelect(categoryId: string) {
		setCategory(categoryId);
	}

    return (
		<Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<Background>
			<ScrollView>
				<Header title="Agendar partida" />

				<Label
					style={{
						marginLeft: 24,
						marginTop: 36,
						marginBottom: 18,
					}}
				>
					Categoria
				</Label>

				<CategorySelect
					hasCheckBox
					setCategory={handleCategorySelect}
					categorySelected={category}
				/>

				<Form>
					<RectButton onPress={handleOpenGuilds}>
						<Select>
							{guild.icon ? <GuildIcon /> : <ImageView />}
							<SelectBody>
								<Label>
									{guild.name
										? guild.name
										: "Selecione um servidor"}
								</Label>
							</SelectBody>
							<Feather
								name="chevron-right"
								size={18}
								color={theme.colors.heading}
							/>
						</Select>
					</RectButton>

					<Field>
						<View>
							<Label style={{ marginBottom: 12 }}>
								Dia e mês
							</Label>
							<Column>
								<SmallInput maxLength={2} />
								<Divider>/</Divider>
								<SmallInput maxLength={2} />
							</Column>
						</View>

						<View>
							<Label style={{ marginBottom: 12 }}>
								Hora e minuto
							</Label>
							<Column>
								<SmallInput maxLength={2} />
								<Divider>:</Divider>
								<SmallInput maxLength={2} />
							</Column>
						</View>
					</Field>

					<Field style={{ marginBottom: 12 }}>
						<Label>Descrição</Label>

						<CaracteresLimit>Max 100 caracteres</CaracteresLimit>
					</Field>

					<TextArea
						multiline
						maxLength={100}
						numberOfLines={5}
						autoCorrect={false}
					/>

					<Footer>
						<Button title="Agendar" />
					</Footer>
				</Form>
			</ScrollView>
			</Background>

			<ModalView visible={openGuildsModa} closeModal={handleCloseGuilds}>
				<Guilds handleGuildSelect={handleGuildSelect} />
			</ModalView>
		</Container>
	);
}
