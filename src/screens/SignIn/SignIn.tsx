import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import IllustrationImg from "../../assets/illustration.png";
import ButtonIcon  from '../../components/ButtonIcon/ButtonIcon';

import { 
    Container, 
    Content, 
    IllustrationImage, 
    SubTitle, 
    Title, 
} from './SignIn.styles';

export function SignIn() {
    return (
		<Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
			<IllustrationImage 
                source={IllustrationImg} 
                resizeMode="stretch"
            />

			<Content>
				<Title>
					Conecte-se {`\n`}
                    e organize suas {`\n`}
					jogatinas
				</Title>

				<SubTitle>
					Crie grupos para jogar seus games {`\n`} 
                    favoritos com seus amigos
				</SubTitle>

                <ButtonIcon 
                    title="Entrar com Discord" 
                    activeOpacity={0.7}
                />
			</Content>
		</Container>
	);
}
