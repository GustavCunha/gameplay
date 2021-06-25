import styled from "styled-components/native";
import { FlatList } from "react-native";
import { theme } from "../../global/styles/theme";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const BannerBackground = styled.ImageBackground`
    width: 100%;
    height: 234px;
    margin-bottom: 30px;
`;

export const BannerContent = styled.View`
	justify-content: flex-end;
    flex: 1;
    padding: 0 24px;
    margin-bottom: 30px;
`;

export const TitleBanner = styled.Text`
    font-size: 28px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    margin-bottom: 12px;
`;

export const SubTitleBanner = styled.Text`
	font-size: 13px;
	font-family: ${theme.fonts.text400};
	color: ${theme.colors.heading};
`;

export const PlayersList = styled(FlatList)`
    margin-left: 24px;
    margin-top: 27px;
`;

export const Footer = styled.View`
    padding: 20px 24px;
    margin-bottom: ${()=> getBottomSpace};
`;