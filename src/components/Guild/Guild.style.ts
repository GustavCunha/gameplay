import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const GuildStyled = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 0 24px;
`;

export const GuildContent = styled.View`
    flex: 1;
    justify-content: center;
    margin-left: 20px;
`;

export const GuildTitle = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 18px;
    margin-bottom: 4px;
`;

export const GuildType = styled.Text`
	font-family: ${theme.fonts.title700};
	color: ${theme.colors.heading};
	font-size: 13px;
`;