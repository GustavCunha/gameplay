import styled from "styled-components/native";
import { FlatList, Platform } from "react-native";

export const HomeHeader = styled.View`
	width: 100%;
	padding: 0 24px;
	flex-direction: row;
	justify-content: space-between;
	margin-top: ${Platform.OS === "ios" ? 40 + "px" : 12 + "%"};
	margin-bottom: 42px;
`;

export const HomeContent = styled.View`
	margin-top: 42px;
`;

export const HomeList = styled(FlatList)`
	margin-top: 24px;
	margin-left: 24px;
`;