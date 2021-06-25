import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export const CategoryStyled = styled(RectButton)``;

export const Gradient = styled(LinearGradient)`
	width: 104px;
	height: 120px;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	margin-right: 8px;
`;

export const ContentCategory = styled(LinearGradient)`
    width: 100px;
    height: 116px;
    border-radius: 8px;
    align-items: center;
	justify-content: space-between;
    padding: 20px 0;
`;

export const TitleCategory = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 15px;
	margin-top: 15px;
`; 

export const styles = StyleSheet.create({
	checked: {
		position: "absolute",
		top: 7,
		right: 7,
		width: 10,
		height: 10,
		backgroundColor: theme.colors.primary,
		borderRadius: 3,
	},
	check: {
		position: "absolute",
		top: 7,
		right: 7,
		width: 12,
		height: 12,
		backgroundColor: theme.colors.secondary100,
		borderColor: theme.colors.secondary50,
		borderWidth: 2,
		borderRadius: 3,
	},
});
