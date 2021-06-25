import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import { AppointmentCreate } from "../screens/AppointmentCreate/AppointmentCreate";
import { AppointmentDetails } from "../screens/AppointmentDetails/AppointmentDetails";
import { Home } from "../screens/Home/Home";
import { SignIn } from "../screens/SignIn/SignIn";

import { theme } from "../global/styles/theme";

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    return (
		<Navigator
			headerMode="none"
			screenOptions={{
				cardStyle: {
					backgroundColor: theme.colors.secondary100,
				},
			}}
		>
			<Screen name="SignIn" component={SignIn} />

			<Screen name="Home" component={Home} />

			<Screen name="Create" component={AppointmentCreate} />

			<Screen name="Details" component={AppointmentDetails} />
		</Navigator>
	);
}