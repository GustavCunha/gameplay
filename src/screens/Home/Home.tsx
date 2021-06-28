import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import { Appointment } from "../../components/Appointment/Appointment";
import { Background } from "../../components/Background/Background";
import { ButtonAdd } from "../../components/ButtonAdd/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect/CategorySelect";
import { ListDivider } from "../../components/ListDivider/ListDivider";
import { ListHeader } from "../../components/ListHeader/ListHeader";
import { Profile } from "../../components/Profile/Profile";

import { 
	HomeContent, 
	HomeHeader, 
	HomeList 
} from "./Home.styles";

export function Home() {
    const [category, setCategory] = useState('');

	const navigation = useNavigation();

    const appointments = [
		{
			id: "1",
			guild: {
				id: "1",
				name: "Lendários",
				icon: null,
				owner: true,
			},
			category: "1",
			date: "22/06 às 20:40h",
			description:
				"É hoje que vamos ao challenger sem perder uma partida da md10",
		},
		{
			id: "2",
			guild: {
				id: "1",
				name: "Lendários",
				icon: null,
				owner: true,
			},
			category: "1",
			date: "22/06 às 20:40h",
			description:
				"É hoje que vamos ao challenger sem perder uma partida da md10",
		},
	];

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

	function handleDetails(){
		navigation.navigate("Details");
	}

	function handleCreate() {
		navigation.navigate("Create");
	}

    return (
		<Background>
			<HomeHeader>
				<Profile />
				<ButtonAdd onPress={handleCreate} />
			</HomeHeader>

			<CategorySelect
				categorySelected={category}
				setCategory={handleCategorySelect}
			/>
			
			<ListHeader title="Partidas agendadas" subtitle="Total 6" />

			<HomeList
				data={appointments}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Appointment data={item} onPress={handleDetails} />
				)}
				ItemSeparatorComponent={() => <ListDivider />}
				contentContainerStyle={{paddingBottom: '10%'}}
				showsVerticalScrollIndicator={false}
			/>
		</Background>
	);
}
