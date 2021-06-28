import React from "react";
import { View, Text } from "react-native";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar/Avatar";
import { 
    Greeting, 
    Message, 
    ProfileContainer, 
    User, 
    UserName 
} from "./Profile.styles";

export function Profile() {
	const { user } = useAuth();

    return (
		<ProfileContainer>
			<Avatar url={user.avatar} />

			<View>
				<User>
					<Greeting>Olá,</Greeting>
					<UserName>{user.firstName}</UserName>
				</User>
				<Message>Hoje é dia de vitória</Message>
			</View>
		</ProfileContainer>
	);
}
