import React from "react";
import { View, Text } from "react-native";
import { Category } from "../Category/Category";

import { categories } from "../../utils/categories";

import { ScrollCategory } from "./CategorySelect.styles";

type Props = {
	categorySelected: string;
	setCategory: (categoryId: string) => void; 
	hasCheckBox?: boolean;
};

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }: Props) {
	return (
		<ScrollCategory
			horizontal
			showsHorizontalScroolIndicator={false}
			contentContainerStyle={{ paddingRight: 40 }}
		>
			{categories.map((category) => (
				<Category
					key={category.id}
					title={category.title}
					icon={category.icon}
					checked={category.id === categorySelected}
					onPress={() => setCategory(category.id)}
					hasCheckBox={hasCheckBox}
				/>
			))}
		</ScrollCategory>
	);
}
