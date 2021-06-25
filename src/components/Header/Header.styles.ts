import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Platform, StatusBar } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";

export const ContainerGradient = styled(LinearGradient)`
    width: 100%;
    height: 104px;
    padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 40 + "px" };
    padding-left: 24px;
    padding-right: 24px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ButtonReturn = styled(BorderlessButton)``;

export const TitleHeader = styled.Text`
    flex: 1;
    text-align: center;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 20px;
`;