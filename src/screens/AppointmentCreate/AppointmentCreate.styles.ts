import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const Label = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 18px;
`;

export const Form = styled.View`
    padding: 0 24px;
    margin-top: 32px;
`;

export const Select = styled.View`
	flex-direction: row;
	width: 100%;
	height: 68px;
	border-color: ${theme.colors.secondary50};
	border-width: 1px;
	border-radius: 8px;
	align-items: center;
	padding-right: 25px;
    overflow: hidden;
`;

export const ImageView = styled.View`
    width: 64px;
    height: 68px;
    background-color: ${theme.colors.secondary40};
    border-color: ${theme.colors.secondary50};
    border-width: 1px;
    border-radius: 8px;
`;

export const SelectBody = styled.View`
    flex: 1;
    align-items: center;
`;

export const Field = styled.View`
	flex-direction: row;
	width: 100%;
    justify-content: space-between;
    margin-top: 30px;
`;

export const Column = styled.View`
	flex-direction: row;
    align-items: center;
`;

export const Divider = styled.Text`
    margin-right: 4px;
    font-size: 15px;
    font-family: ${theme.fonts.text500};
    color: ${theme.colors.highlight};
`;

export const CaracteresLimit = styled.Text`
	font-size: 13px;
	font-family: ${theme.fonts.text400};
	color: ${theme.colors.highlight};
`;

export const Footer = styled.View`
    margin-top: 20px;
    margin-bottom: 56px;
`;