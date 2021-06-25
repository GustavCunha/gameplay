import React, { ReactNode } from "react";
import { View, Text, Modal, ModalProps, TouchableWithoutFeedback } from "react-native";
import { Background } from "../Background/Background";
import { Bar, ModalContainer, Overlay } from "./ModalView.styles";

type Props = ModalProps & {
	children: ReactNode;
	closeModal: () => void;
};

export function ModalView({ children, closeModal, ...rest }: Props) {
	return (
		<Modal
			transparent
			animationType="slide"
			statusBarTranslucent
			{...rest}
		>
            <TouchableWithoutFeedback onPress={closeModal}>
                <Overlay>
                    <ModalContainer>
                        <Background>
                            <Bar/>
                                {children}
                        </Background>
                    </ModalContainer>
                </Overlay>
            </TouchableWithoutFeedback>
        </Modal>
	);
}
