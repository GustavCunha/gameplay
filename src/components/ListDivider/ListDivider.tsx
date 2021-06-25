import React from 'react';
import { ListDividerStyled } from './ListDivider.styles';

type Props = {
	isCentered?: boolean;
};

export function ListDivider({ isCentered }: Props) {
	return <ListDividerStyled 
        style={isCentered ? {marginVertical: 12} : {marginTop: 2, marginBottom: 31}} />;
}
