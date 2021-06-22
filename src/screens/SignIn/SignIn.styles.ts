import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const IllustrationImage = styled.Image`
    width: 100%;
    height: 360px;
`;

export const Content = styled.View`
    margin-top: -40px;
    padding: 0 50px;
`;

export const Title = styled.Text`
    color: ${theme.colors.heading};
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 16px;
    font-family: ${theme.fonts.title700};
`;

export const SubTitle = styled.Text`
	color: ${theme.colors.heading};
	font-size: 15px;
	line-height: 25px;
	text-align: center;
	margin-bottom: 64px;
	font-family: ${theme.fonts.title500};
`;