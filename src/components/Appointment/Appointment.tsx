import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import CalendarSvg from "../../assets/calendar.svg";
import PlayerSvg from "../../assets/player.svg";

import { GuildIcon } from "../GuildIcon/GuildIcon";
import { categories } from "../../utils/categories";
import { theme } from "../../global/styles/theme";

import { 
    AppointmentCategoryText, 
    AppointmentContainer, 
    AppointmentContent, 
    AppointmentDate, 
    AppointmentDateInfo, 
    AppointmentFooter, 
    AppointmentHeader, 
    AppointmentPlayer, 
    AppointmentPlayersInfo, 
    AppointmentStyled, 
    AppointmentTitle 
} from "./Appointment.styles";

export type GuildProps = {
	id: string;
	name: string;
	icon: null;
	owner: boolean;
};

export type AppointmentProps = {
	id: string;
	guild: GuildProps;
	category: string;
	date: string;
	description: string;
};

type Props = RectButtonProps & {
	data: AppointmentProps;
};

export function Appointment({data, ...rest}: Props) {

    const [category] = categories.filter((item) => item.id === data.category);
	const { owner } = data.guild;
	const { primary, on } = theme.colors;

    return (
		<AppointmentStyled>
			<AppointmentContainer>
				<GuildIcon />
				<AppointmentContent>
					<AppointmentHeader>
						<AppointmentTitle>{data.guild.name}</AppointmentTitle>

						<AppointmentCategoryText>
							{category.title}
						</AppointmentCategoryText>
					</AppointmentHeader>
					
					<AppointmentFooter>
						<AppointmentDateInfo>
							<CalendarSvg />
							<AppointmentDate>{data.date}</AppointmentDate>
						</AppointmentDateInfo>

						<AppointmentPlayersInfo>
							<PlayerSvg fill={owner ? primary : on} />
							<AppointmentPlayer
								style={{ color: owner ? primary : on }}
							>
								{owner ? "Anfritrião" : "Visitante"}
							</AppointmentPlayer>
						</AppointmentPlayersInfo>
					</AppointmentFooter>
				</AppointmentContent>
			</AppointmentContainer>
		</AppointmentStyled>
	);
}
