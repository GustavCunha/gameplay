import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const ListDividerStyled = styled.View`
    width: 75%;
    height: 1px;
    background-color: ${theme.colors.secondary40};
    margin-top: 2px;
    margin-bottom: 31px;
    align-self: flex-end;
`;