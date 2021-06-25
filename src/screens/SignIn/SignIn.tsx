import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background/Background';
import { ButtonIcon }  from '../../components/ButtonIcon/ButtonIcon';

import IllustrationImg from "../../assets/illustration.png";

import { 
    Container, 
    Content, 
    IllustrationImage, 
    SubTitle, 
    Title, 
} from './SignIn.styles';

export function SignIn() {

    const navigation = useNavigation();

    function handleSignIn(){
        navigation.navigate('Home');
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

					<ButtonIcon
						title="Entrar com Discord"
						onPress={handleSignIn}
					/>
				</Content>
			</Container>
		</Background>
	);
}
