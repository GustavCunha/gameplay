import React, {ReactNode} from 'react';
import { theme } from '../../global/styles/theme';
import { Container } from './Background.styles';

type BackgroundProps = {
    children: ReactNode
}

export function Background({children} : BackgroundProps) {
    const {secondary80, secondary100} = theme.colors;

    return (
        <Container
            colors={[secondary80, secondary100]}
        >
            {children}
        </Container>
    )
}
