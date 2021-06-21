import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background};
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
    text-align: center;
    margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
	color: ${theme.colors.heading};
	font-size: 15px;
	text-align: center;
	margin-bottom: 64px;
`;