import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const AppointmentStyled = styled(RectButton)``;

export const AppointmentContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-self: center;
`;

export const GuildIconContainer = styled(LinearGradient)`
    height: 68px;
    width: 64px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-right: 20px;
`; 

export const AppointmentContent = styled.View`
    flex: 1;
`;

export const AppointmentHeader = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const AppointmentTitle = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 18px;
`;

export const AppointmentCategoryText = styled.Text`
	font-family: ${theme.fonts.text400};
	color: ${theme.colors.highlight};
	font-size: 13px;
    margin-right: 24px;
`;

export const AppointmentFooter = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
`;

export const AppointmentDateInfo = styled.View`
	flex-direction: row;
    align-items: center;
`;

export const AppointmentDate = styled.Text`
	font-family: ${theme.fonts.text500};
	color: ${theme.colors.heading};
	font-size: 13px;
    margin-left: 7px;
`;

export const AppointmentPlayersInfo = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const AppointmentPlayer = styled.Text`
    font-family: ${theme.fonts.text500};
    font-size: 13px;
    margin-left: 7px;
    margin-right: 24px;
`;