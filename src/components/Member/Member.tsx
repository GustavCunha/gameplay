import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../global/styles/theme";
import { Avatar } from "../Avatar/Avatar";
import { BulletStatus, MemberStyled, MemberTitle, NameStatus, Status } from "./Member.styles";

export type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type Props = {
    data: MemberProps;
}

export function Member({data}: Props) {
    const {on, primary} = theme.colors;
    const isOnline = data.status === 'online';

    return (
        <MemberStyled>
            <Avatar url={data.avatar_url} />

            <View>
                <MemberTitle>
                    {data.username}
                </MemberTitle>

                <Status>
                    <BulletStatus 
                        style={{backgroundColor: isOnline ? on : primary}}
                    />

                    <NameStatus>
                        {isOnline ? 'Disponível' : 'Ocupado'}
                    </NameStatus>
                </Status>
            </View>
        </MemberStyled>
    )
}
