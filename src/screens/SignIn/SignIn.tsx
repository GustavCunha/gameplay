import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, ActivityIndicator } from 'react-native';

import { Background } from '../../components/Background/Background';
import { ButtonIcon }  from '../../components/ButtonIcon/ButtonIcon';

import { useAuth } from '../../hooks/auth';
import IllustrationImg from "../../assets/illustration.png";
import { theme } from '../../global/styles/theme';

import { 
    Container, 
    Content, 
    IllustrationImage, 
    SubTitle, 
    Title, 
} from './SignIn.styles';

export function SignIn() {

	const { loading, signIn} = useAuth();

    async function handleSignIn(){
		try {
			await signIn();
		} catch (error) {
			Alert.alert(error);
		}
    }

    return (
		<Background>
			<Container>
				<IllustrationImage
					source={IllustrationImg}
					resizeMode="stretch"
				/>

				<Content>
					<Title>
						Conecte-se {"\n"}e organize suas {"\n"}
						jogatinas
					</Title>

					<SubTitle>
						Crie grupos para jogar seus games {"\n"}
						favoritos com seus amigos
					</SubTitle>

					{loading ? (
						<ActivityIndicator color={theme.colors.primary}/>
					) : (
						<ButtonIcon
							title="Entrar com Discord"
							onPress={handleSignIn}
						/>
					)}
				</Content>
			</Container>
		</Background>
	);
}
