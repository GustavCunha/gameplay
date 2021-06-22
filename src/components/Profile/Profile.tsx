import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar/Avatar";
import { 
    Greeting, 
    Message, 
    ProfileContainer, 
    User, 
    UserName 
} from "./Profile.styles";

export function Profile() {
    return (
		<ProfileContainer>
			<Avatar url="https://avatars.githubusercontent.com/u/55558998?v=4" />

			<View>
				<User>
					<Greeting>Olá,</Greeting>
					<UserName>Gustavo</UserName>
				</User>
				<Message>Hoje é dia de vitória</Message>
			</View>
		</ProfileContainer>
	);
}
