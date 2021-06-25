import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const MemberStyled = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const MemberTitle = styled.Text`
    font-family: ${theme.fonts.title700};
    font-size: 18px;
    color: ${theme.colors.heading};
`;

export const Status = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const BulletStatus = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 9px;
`;

export const NameStatus = styled.Text`
	font-family: ${theme.fonts.text400};
	font-size: 13px;
	color: ${theme.colors.highlight};
`;