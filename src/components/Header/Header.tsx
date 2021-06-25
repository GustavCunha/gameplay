import React, { ReactNode } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Feather} from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";

import { 
    ButtonReturn, 
    ContainerGradient,
    TitleHeader,
} from "./Header.styles";

type Props = {
    title: string;
    action?: ReactNode
}

export function Header({title, action}: Props) {
    const {secondary100, secondary40, heading} = theme.colors; 
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }

    return (
		<ContainerGradient
            colors={[secondary100, secondary40]}
        >
            <ButtonReturn 
                onPress={handleGoBack}
            >
                <Feather 
                    name="arrow-left"
                    size={24}
                    color={heading}
                />
            </ButtonReturn>
			
            <TitleHeader>
                {title}
            </TitleHeader>

            {action && (
                <View>
                    {action}
                </View>
            )}
		</ContainerGradient>
	);
}
